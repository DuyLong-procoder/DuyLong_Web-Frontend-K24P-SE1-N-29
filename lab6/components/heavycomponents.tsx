export default function HeavyComponents() {
  const items = Array.from({ length: 2000 }, (_, i) => `Item ${i + 1}`);

  return (
    <div>
      <h2>Heavy Component (Lazy Loaded)</h2>
      <p>Component này giả lập nặng để test code splitting.</p>

      <div
        style={{
          maxHeight: 300,
          overflow: "auto",
          border: "1px solid #ddd",
          padding: 12,
        }}
      >
        {items.map((x) => (
          <div key={x}>{x}</div>
        ))}
      </div>
    </div>
  );
}
