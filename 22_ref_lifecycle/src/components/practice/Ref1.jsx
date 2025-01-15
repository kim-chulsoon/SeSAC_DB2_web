import { useRef, useState } from "react";

export default function Ref1() {
  const ref = useRef();
  const [bg, setBg] = useState();

  const changeBg = () => {
    setBg(ref.current.value);
    console.log(changeBg);
  };

  const handleFocus = () => {
    ref.current.focus();
  };

  return (
    <div style={{ backgroundColor: bg, width: "100px", height: "100px" }}>
      <input type="text" ref={ref} />

      <br />
      <button onClick={(handleFocus, changeBg)}>색적용</button>
    </div>
  );
}
