function expensiveCalculation(num) {
  console.log("Calculating...");
  for (let i: number = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
}

function App() {
  const [count: number, setCount] = useState(initialState: 0);
  const [inputValue: string, setInputValue] = useState(initialState: '');

  const calculation = useMemo(
    (factory: () => expensiveCalculation(count)),
    (deps: [count])
  );

  return (
    <div>
      <h1>Memoization with useMemo</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setInputValue(e.target.value)
        }
        placeholder="Type something..."
      />

      <button onClick={(): void => setCount(count + 1)}>
        Increment
      </button>

      <h2>Count: {count}</h2>
      <h2>Expensive Calculation Result: {calculation}</h2>
    </div>
  );
}
