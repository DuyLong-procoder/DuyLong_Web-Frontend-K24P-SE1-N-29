import type { ReactNode } from "react";

interface TextFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
}

export default function TextField({
  label,
  type = "text",
  placeholder,
  icon,
}: TextFieldProps) {
  return (
    <div style={{ marginBottom: "16px" }}>
      {label && (
        <label
          style={{
            display: "block",
            marginBottom: "6px",
            fontSize: "13px",
            fontWeight: 500,
            color: "#444444",                 // đậm hơn
          }}
        >
          {label}
        </label>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          border: "1px solid #dddddd",
          padding: "10px 12px",
          backgroundColor: "#ffffff",        // trắng hẳn cho rõ
        }}
      >
        {icon && (
          <span
            style={{
              marginRight: "8px",
              fontSize: "16px",
              color: "#c8102e",              // icon màu hồng/đỏ cho nổi
            }}
          >
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            backgroundColor: "transparent",
            fontSize: "14px",
            color: "#333333",                // chữ gõ vào đậm hơn
            fontWeight: 500,
          }}
        />
      </div>
    </div>
  );
}
