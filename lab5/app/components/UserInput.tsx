"use client";

import { useState } from "react";

const UserInput = () => {
  const [text, setText] = useState("");

  const handleShow = () => {
    alert(`Giá trị hiện tại: ${text}`);
  };

  return (
    <section>
      <h1>Exercise 2: Managing User Input with State Hook</h1>
      <p>Sử dụng useState để quản lý giá trị input</p>

      <div style={{ display: "flex", gap: 12 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập nội dung..."
        />

        <button onClick={handleShow}>Hiển thị</button>
      </div>
    </section>
  );
};

export default UserInput;
