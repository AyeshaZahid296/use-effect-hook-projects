import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-1 rounded"
      />
      <p>Input Value: {input}</p>
    </div>
  );
}

export default Form;
