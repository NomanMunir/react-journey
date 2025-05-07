// import { Form } from "react-router-dom";

export default function AuthForm() {
  return (
    <form>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </p>
      <p>
        <button>Login</button>
      </p>
    </form>
  );
}
