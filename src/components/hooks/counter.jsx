// import React, { useState, useEffect } from "react";
import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const defaultVal = {
  nickname: "",
  name: "",
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, defaultVal);

  const { nickname, name } = state;

  const updateValue = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="nickname" value={nickname} onChange={updateValue}></input>
        <h4>{nickname}</h4>
      </div>
      <div>
        <input name="name" value={name} onChange={updateValue}></input>
        <h4>{name}</h4>
      </div>
    </div>
  );
};
export default Counter;
