"use client";

import Counter from "../components/Counter";
import UserInput from "../components/UserInput";
import Memoization from "../components/Memoization";
import SumCalculation from "../components/SumCalculation";
import SearchDebounce from "../components/SearchDebounce";

const HomePage = () => {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: 24 }}>
      <h1>LAB 5 – React Hooks</h1>

      <Counter />

      <hr style={{ margin: "32px 0" }} />

      <UserInput />

      <hr style={{ margin: "32px 0" }} />

      <Memoization />
      
      <hr style={{ margin: "32px 0" }} />
      <SumCalculation />

      <hr style={{ margin: "32px 0" }} />
      <SearchDebounce />

    </main>
  );
};

export default HomePage;
