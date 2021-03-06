import { useState } from "react";

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [sum, setSum] = useState(10);

  function handleValue1(e) {
    setValue1(e.target.valueAsNumber);
  }

  function handleValue2(e) {
    setValue2(e.target.valueAsNumber);
  }

  function handleSum() {
    setSum(value1 + value2);
  }

  return (
    <>
      <input type="number" id="first" onChange={handleValue1} />
      <input type="number" id="second" onChange={handleValue2} />
      <button id="sum-button" onClick={handleSum}>
        Sumar
      </button>
      <p id="sum">{sum}</p>
    </>
  );
}

export default App;
