import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  console.log("sum", sum);
  return sum / numbers.length;
};

const UseMemo = () => {
  const [numList, setNumList] = useState([]);
  const [input, setInput] = useState("");
  const inputEl = useRef(null);

  const onChangeInput = useCallback(
    (e) => setInput(parseInt(e.target.value)),
    [] // 컴포넌트가 처음 렌더링 될 때만 함수 생성
  );

  const onClickAverage = useCallback(() => {
    const nextNumList = numList.concat(parseInt(input));
    setNumList(nextNumList);
    setInput(0);
    inputEl.current.focus();
  }, [input, numList]); // input 혹은 numList가 바뀌었을 때만 함수 생성
  const avg = useMemo(() => getAverage(numList), [numList]);

  return (
    <div>
      <div>
        <input
          type="number"
          value={input}
          ref={inputEl}
          onChange={onChangeInput}
          placeholder="type a number"
        />
        <button onClick={onClickAverage}>Get Average</button>
      </div>
      <div>
        {numList.map((num, index) => (
          <div key={index}>{num}</div>
        ))}
      </div>
      <div>평균값:{avg}</div>
    </div>
  );
};

export default UseMemo;
