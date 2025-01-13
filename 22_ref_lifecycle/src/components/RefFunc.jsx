import { useRef, useState } from "react";

export function RefFunc1() {
  const inputRef = useRef();

  const handleFocus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  };
  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </div>
  );
}

// 변수 ref
export function RefFunc2() {
  const ref = useRef(1);
  const [state, setState] = useState(1);
  let variable = 1;

  const plusRef = () => {
    ref.current += 1;
    console.log("ref.current", ref.current);
  };

  const plusState = () => {
    setState(state + 1);
    console.log("state", state);
  };

  const plusVar = () => {
    variable += 1;
    console.log("var", variable);
  };

  return (
    <div>
      <h4>{ref.current}</h4>
      <button onClick={plusRef}>plus ref</button>
      <h4>{state}</h4>
      <button onClick={plusState}>plus state</button>
      <h4>{variable}</h4>
      <button onClick={plusVar}>plus variable</button>
    </div>
  );
}
