"use client";

import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement, reset, min, max } = useCounter(-10, 10);

  return (
    <section>
      <h1>Exercise 1: Creating and Using a Counter Hook</h1>

      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <button onClick={decrement} disabled={count === min}>
          − Giảm
        </button>

        <span style={{ fontSize: 28, fontWeight: "bold" }}>{count}</span>

        <button onClick={increment} disabled={count === max}>
          + Tăng
        </button>

        <button onClick={reset}>Reset</button>
      </div>

      <p>Giới hạn: {min} đến {max}</p>
    </section>
  );
};

export default Counter;
