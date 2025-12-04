import type { FormEvent } from "react";
import TextField from "./TextField";
import RememberRow from "./RememberRow";
import PrimaryButton from "./PrimaryButton";

export default function LoginForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Login clicked!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        placeholder="Username / email address"
        icon="👤"
      />

      <TextField
        type="password"
        placeholder="Password"
        icon="🔑"
      />

      <RememberRow />

      <PrimaryButton type="submit">Login Now →</PrimaryButton>
    </form>
  );
}
