import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("Hello");
  const onClickLeave = () => setMessage("Bye");

  const [color, setColor] = useState("red");

  const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: true },
  ];

  const onClickB = (param) => {
    let items = array.concat(param);
    // id 가 2 인 항목 제거
    items.filter((item) => item.id !== 2);
    // id 가 1 인 항목의 value 값 false 로 change
    items.map((item) => (item.id === 1 ? { ...item, value: false } : item));
    console.log(items);
  };

  /* 
  when update value using state, 
  always use copy of origin to compare and change, then use setState to update 
  */

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <h4 style={{ color }}>{message}</h4>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        Change color to blue
      </button>
      <button onClick={onClickB({ id: 4, value: false })}>Update B</button>
    </div>
  );
};

export default Say;
