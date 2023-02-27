import { useEffect, useState } from "react";

export const Capture = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    const randomFirstNumber = Math.floor(Math.random() * 49) + 1;
    const randomSecondNumber = Math.floor(Math.random() * 49) + 1;
    setFirstNumber(randomFirstNumber);
    setSecondNumber(randomSecondNumber);
  }, []);

  const handleResult = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const _result: number = firstNumber + secondNumber;
    const name = e.target.name;
    if (name === "capture" && value === _result) {
      setResult(value);
      console.log(true);
    }
    console.log(result);
  };

  return (
    <>
      <div style={{ color: "red", fontSize: "2rem" }}>
        <span style={{ padding: "10px" }}>{firstNumber}</span>+
        <span style={{ padding: "10px" }}>{secondNumber}</span>
      </div>
      <div>
        <input type="text" name="capture" onChange={handleResult} />
      </div>
    </>
  );
};
