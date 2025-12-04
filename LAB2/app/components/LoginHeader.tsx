export default function LoginHeader() {
  return (
    <div style={{ marginBottom: "24px", display: "flex", gap: "16px" }}>
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          backgroundColor: "#ffeef0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
        }}
      >
        🔒
      </div>

      <div>
        <h2
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: 700,
            color: "#333333",          // 🔴 đậm hơn
          }}
        >
          Login Here
        </h2>
        <p
          style={{
            marginTop: "8px",
            fontSize: "14px",
            color: "#555555",          // 🔴 đậm hơn
            lineHeight: 1.5,
          }}
        >
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account.
        </p>
      </div>
    </div>
  );
}
