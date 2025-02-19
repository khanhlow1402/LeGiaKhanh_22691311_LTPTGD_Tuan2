import { useState } from "react";

const HelloConsole = () => {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    setDisplayName(name);
    console.log(`Hello: ${name}`);
  };

  const handleSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  const handleCalculate = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    let res;
    switch (operation) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n2 !== 0 ? n1 / n2 : "Không thể chia cho 0";
        break;
      default:
        res = null;
    }
    setResult(res);
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-lg">Bài 1</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Nhập tên của bạn"
        className="border p-2 rounded"
      />
      <button 
        onClick={handleClick} 
        className="ml-2 p-2 bg-blue-500 text-white rounded">
        Hiển thị tên
      </button>
      {displayName && <p className="mt-2">Hello: {displayName}</p>}
      
      <h2 className="font-bold text-lg mt-4">Bài 2</h2>
      <div className="mt-2">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Nhập số thứ nhất"
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Nhập số thứ hai"
          className="border p-2 rounded mr-2"
        />
        <button 
          onClick={handleSum} 
          className="p-2 bg-green-500 text-white rounded">
          Tính tổng
        </button>
        {sum !== null && <p className="mt-2">Tổng: {sum}</p>}
      </div>
      
      <h2 className="font-bold text-lg mt-4">Bài 3</h2>
      <div className="mt-2">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Nhập số thứ nhất"
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Nhập số thứ hai"
          className="border p-2 rounded mr-2"
        />
        <div className="mt-2">
          <label><input type="radio" name="operation" value="+" checked={operation === "+"} onChange={(e) => setOperation(e.target.value)} /> +</label>
          <label className="ml-2"><input type="radio" name="operation" value="-" checked={operation === "-"} onChange={(e) => setOperation(e.target.value)} /> -</label>
          <label className="ml-2"><input type="radio" name="operation" value="*" checked={operation === "*"} onChange={(e) => setOperation(e.target.value)} /> *</label>
          <label className="ml-2"><input type="radio" name="operation" value="/" checked={operation === "/"} onChange={(e) => setOperation(e.target.value)} /> /</label>
        </div>
        <button 
          onClick={handleCalculate} 
          className="p-2 bg-purple-500 text-white rounded mt-2">
          Tính toán
        </button>
        {result !== null && <p className="mt-2">Kết quả: {result}</p>}
      </div>
    </div>
  );
};

export default HelloConsole;
