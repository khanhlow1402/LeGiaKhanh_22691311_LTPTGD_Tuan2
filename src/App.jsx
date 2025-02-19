import { useState } from "react";

const HelloConsole = () => {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(null);
  const [activeTab, setActiveTab] = useState("bai1");
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

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
      case "+": res = n1 + n2; break;
      case "-": res = n1 - n2; break;
      case "*": res = n1 * n2; break;
      case "/": res = n2 !== 0 ? n1 / n2 : "Không thể chia cho 0"; break;
      default: res = null;
    }
    setResult(res);
  };

  const handleAddTodo = () => {
    if (todoInput.trim()) {
      setTodos([...todos, { text: todoInput, completed: false }]);
      setTodoInput("");
    }
  };

  const handleToggleTodo = (index) => {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo));
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        {["bai1", "bai2", "bai3", "bai5"].map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`p-2 ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"} rounded`}>
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === "bai1" && (
        <div>
          <h2 className="font-bold text-lg">Bài 1</h2>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập tên" className="border p-2 rounded" />
          <button onClick={handleClick} className="ml-2 p-2 bg-blue-500 text-white rounded">Hiển thị tên</button>
          {displayName && <p className="mt-2">Hello: {displayName}</p>}
        </div>
      )}

      {activeTab === "bai2" && (
        <div>
          <h2 className="font-bold text-lg">Bài 2</h2>
          <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Nhập số 1" className="border p-2 rounded mr-2" />
          <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Nhập số 2" className="border p-2 rounded mr-2" />
          <button onClick={handleSum} className="p-2 bg-green-500 text-white rounded">Tính tổng</button>
          {sum !== null && <p className="mt-2">Tổng: {sum}</p>}
        </div>
      )}

      {activeTab === "bai3" && (
        <div>
          <h2 className="font-bold text-lg">Bài 3</h2>
          <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Nhập số 1" className="border p-2 rounded mr-2" />
          <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Nhập số 2" className="border p-2 rounded mr-2" />
          <div className="mt-2">
            {["+", "-", "*", "/"].map(op => (
              <label key={op} className="ml-2">
                <input type="radio" name="operation" value={op} checked={operation === op} onChange={(e) => setOperation(e.target.value)} /> {op}
              </label>
            ))}
          </div>
          <button onClick={handleCalculate} className="p-2 bg-purple-500 text-white rounded mt-2">Tính toán</button>
          {result !== null && <p className="mt-2">Kết quả: {result}</p>}
        </div>
      )}

      {activeTab === "bai5" && (
        <div>
          <h2 className="font-bold text-lg">Bài 5 - To-Do App</h2>
          <div className="flex mb-2">
            <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} placeholder="Thêm công việc" className="border p-2 rounded mr-2 w-full" />
            <button onClick={handleAddTodo} className="p-2 bg-green-500 text-white rounded">Thêm</button>
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-2 mt-1 rounded">
                <span className={todo.completed ? "line-through" : ""} onClick={() => handleToggleTodo(index)}>{todo.text}</span>
                <button onClick={() => handleDeleteTodo(index)} className="p-1 bg-red-500 text-white rounded">Xóa</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HelloConsole;