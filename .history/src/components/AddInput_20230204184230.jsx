import React, { useState } from "react";

export default function AddInput() {
  const [data, setData] = useState();
  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <input data-testid="new-todo-input" onChange={handleChange} />
      <button data-testid="new-todo-add-button">추가</button>
    </div>
  );
}
