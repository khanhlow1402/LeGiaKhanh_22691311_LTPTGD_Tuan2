import { useState } from "react";

const HelloConsole = () => {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    setDisplayName(name);
    console.log(`Hello: ${name}`);
  };

  return (
    <div className="p-4">
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
    </div>
  );
};

export default HelloConsole;

