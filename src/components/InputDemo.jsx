import { useState } from "react";

function InputDemo() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Enter Your Name</h2>

      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <h3>Hello {name}</h3>
    </div>
  );
}

export default InputDemo;