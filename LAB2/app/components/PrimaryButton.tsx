// app/components/PrimaryButton.tsx
import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function PrimaryButton({
  children,
  type = "button",
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        width: "100%",
        border: "none",
        borderRadius: "999px",
        padding: "14px 0",
        fontSize: "15px",
        fontWeight: 600,
        color: "#ffffff",
        backgroundColor: "#e5103a",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
