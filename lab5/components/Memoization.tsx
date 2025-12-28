"use client";

import { useState, useMemo } from "react";

const Memoization = () => {
  const [isHovered, setIsHovered] = useState(false);

  const boxStyle = useMemo(() => {
    console.log("👉 Recalculating box style");

    return {
      width: 220,
      height: 220,
      backgroundColor: isHovered ? "#ff4d4f" : "#e5e7eb",
      borderRadius: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
      fontSize: 18,
      fontWeight: 600,
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    };
  }, [isHovered]);

  return (
    <section style={{ marginTop: 40 }}>
      <h2>Exercise 3: Implementing Memoization with useMemo</h2>

      <p style={{ marginBottom: 16 }}>
        Di chuột vào box để thay đổi màu nền. Style của box được tính toán bằng{" "}
        <b>useMemo</b> để tránh tính toán lại không cần thiết.
      </p>

      <div
        style={boxStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "Hover Active!" : "Hover me"}
      </div>

      <p style={{ marginTop: 12, fontStyle: "italic", opacity: 0.7 }}>
        Mở console để xem khi nào style được tính toán lại
      </p>
    </section>
  );
};

export default Memoization;
