"use client";

import { useMemo, useState } from "react";

const SumCalculation = () => {
  const [input, setInput] = useState<string>("");
  const [numbers, setNumbers] = useState<number[]>([]);

  const addNumber = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const value = Number(trimmed);
    if (Number.isNaN(value)) {
      alert("Vui lòng nhập một số hợp lệ!");
      return;
    }

    setNumbers((prev) => [...prev, value]);
    setInput("");
  };

  const removeNumber = (indexToRemove: number) => {
    setNumbers((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addNumber();
  };

 
  const sum = useMemo(() => {
    console.log("Đang tính toán lại tổng...");
    return numbers.reduce((acc, n) => acc + n, 0);
  }, [numbers]);

  return (
    <section style={{ marginTop: 40 }}>
      <h2>Exercise 4: Sum Calculation with useMemo</h2>
      <p style={{ marginBottom: 12 }}>
        Nhập số và nhấn <b>Enter</b> để thêm vào danh sách. Tổng các số được tính tự động bằng{" "}
        <b>useMemo</b> để tránh tính toán lại không cần thiết.
      </p>

      <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nhập số..."
          style={{
            flex: 1,
            height: 40,
            padding: "0 12px",
            border: "1px solid #cbd5e1",
            borderRadius: 8,
          }}
        />
        <button
          onClick={addNumber}
          style={{
            height: 40,
            padding: "0 16px",
            borderRadius: 8,
            border: "none",
            background: "#2563eb",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Thêm
        </button>
      </div>

      <div
        style={{
          border: "1px solid #e2e8f0",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        {numbers.length === 0 ? (
          <div style={{ padding: 12, opacity: 0.7 }}>Chưa có số nào.</div>
        ) : (
          numbers.map((n, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 12px",
                borderTop: idx === 0 ? "none" : "1px solid #e2e8f0",
              }}
            >
              <span>Số {n}</span>
              <button
                onClick={() => removeNumber(idx)}
                style={{
                  padding: "6px 12px",
                  borderRadius: 8,
                  border: "1px solid #ef4444",
                  background: "white",
                  color: "#ef4444",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Xóa
              </button>
            </div>
          ))
        )}
      </div>

      <div
        style={{
          marginTop: 16,
          padding: 12,
          borderRadius: 10,
          background: "#f1f5f9",
        }}
      >
        <b>Tổng: {sum}</b>
        <div style={{ marginTop: 6, fontSize: 13, opacity: 0.7 }}>
          (Mở console để xem khi nào tổng được tính toán lại)
        </div>
      </div>
    </section>
  );
};

export default SumCalculation;
