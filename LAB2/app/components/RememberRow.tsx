// app/components/RememberRow.tsx
export default function RememberRow() {
  return (
    <div
      style={{
        marginBottom: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "13px",
      }}
    >
      <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <input type="checkbox" />
        <span>Remember me</span>
      </label>

      <a href="#" style={{ color: "#c8102e", textDecoration: "underline" }}>
        Forget Password
      </a>
    </div>
  );
}
