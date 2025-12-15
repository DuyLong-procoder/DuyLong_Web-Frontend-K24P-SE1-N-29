"use client";

import { useState } from "react";

export default function EventExercises() {
  /* ===== Exercise 1 ===== */
  const handleClick = () => {
    alert("Duy Long đẹp trai 😎");
  };

  /* ===== Exercise 2 ===== */
  const [value, setValue] = useState("");

  /* ===== Exercise 3 ===== */
  const [isHovered, setIsHovered] = useState(false);

  /* ===== Exercise 4 ===== */
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setItems([...items, inputText]);
      setInputText("");
    }
  };

  /* ===== Exercise 5 ===== */
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-xl mx-auto p-6 space-y-14">

      {/* ===== Exercise 1 ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Exercise 1: Simple Button Click
        </h2>
        <p className="mb-4">
          Click vào button bên dưới để hiển thị thông báo alert
        </p>
        <button
          onClick={handleClick}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Click Me!
        </button>
      </section>

      {/* ===== Exercise 2 ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Exercise 2: Handling Input Changes
        </h2>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Nhập gì đó..."
          className="w-full px-3 py-2 border rounded-md mb-3"
        />
        <p>
          Giá trị hiện tại: <b>{value}</b>
        </p>
      </section>

      {/* ===== Exercise 3 ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Exercise 3: Handling Mouse Events
        </h2>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-48 h-48 flex items-center justify-center text-white
            rounded-lg cursor-pointer transition
            ${isHovered ? "bg-red-500" : "bg-blue-500"}`}
        >
          {isHovered ? "Hover!" : "Hover me!"}
        </div>
      </section>

      {/* ===== Exercise 4 ===== */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Exercise 4: Handling Keyboard Events
        </h2>
        <p className="mb-3">
          Nhập text và nhấn <b>Enter</b> để thêm vào danh sách
        </p>

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Nhập text và nhấn Enter..."
          className="w-full px-3 py-2 border rounded-md mb-4"
        />

        <ul className="border rounded-md divide-y">
          {items.map((item, index) => (
            <li key={index} className="px-4 py-2">
              {index + 1}. {item}
            </li>
          ))}
        </ul>
      </section>

     {/* ===== Exercise 5 ===== */}
<section>
  <h2 className="text-2xl font-semibold mb-4">
    Exercise 5: Counter
  </h2>
  <p className="mb-4">
    Giá trị counter nằm trong khoảng <b>-5 → 5</b>
  </p>

  <div className="flex items-center gap-6">
    <button
      onClick={() => {
        if (count > -5) {
          setCount(count - 1);
        }
      }}
      disabled={count === -5}
      className={`px-4 py-2 rounded-lg text-white
        ${count === -5 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"}
      `}
    >
      − Giảm
    </button>

    <span className="text-2xl font-bold">{count}</span>

    <button
      onClick={() => {
        if (count < 5) {
          setCount(count + 1);
        }
      }}
      disabled={count === 5}
      className={`px-4 py-2 rounded-lg text-white
        ${count === 5 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"}
      `}
    >
      + Tăng
    </button>
  </div>
</section>

    </div>
  );
}
