import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
export default function NewEventPage() {
  return <EventForm method="post" />;
}

export const action = async ({ request }) => {
  const formdata = await request.formData();
  const eventData = {
    title: formdata.get("title"),
    image: formdata.get("image"),
    date: formdata.get("date"),
    description: formdata.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not send request!" }), {
      status: 500,
    });
  }

  return redirect("/events");
};
