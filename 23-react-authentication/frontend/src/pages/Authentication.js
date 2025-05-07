import { redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  try {
    const response = await fetch("http://localhost:8080/" + mode, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(authData),
    });

    if (response.status === 422 || response.status === 401) return response;

    if (!response.ok) {
      throw new Response(
        JSON.stringify({ message: "unknown error happened." }),
        {
          status: 500,
        }
      );
    }

    const resData = await response.json();
    localStorage.setItem("token", resData.token);

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());
    return redirect("/");
  } catch (error) {
    console.error("Error during authentication:", error);
    throw new Response(
      JSON.stringify({ message: "An error occurred during authentication." }),
      {
        status: 500,
      }
    );
  }
}
