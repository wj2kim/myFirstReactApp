import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
      break;
    case "DECREMENT":
      return { value: state.value - 1 };
      break;
    default:
      return state;
  }
}

export default function customHooks(param) {
  const [state, dispatch] = useReducer(reducer, param);
  const onClick = dispatch(param);
  return [state, onClick];
}
