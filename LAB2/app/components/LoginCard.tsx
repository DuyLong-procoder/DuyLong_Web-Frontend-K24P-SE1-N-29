// app/components/LoginCard.tsx
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <div
      style={{
        width: "420px",
        padding: "32px",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <LoginHeader />
      <LoginForm />
    </div>
  );
}
