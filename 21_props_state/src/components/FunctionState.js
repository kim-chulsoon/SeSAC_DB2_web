import { useState } from "react";

export default function FunctionState() {
  // 1. 기존 js 사용해서 화면 바꾸는 방식

  //   let apple = "사과";
  //   const inEng = () => {
  //     // apple = "apple";
  //     const content = document.querySelector("state");
  //     content.innerHTML = "apple";
  //   };

  // 2. state 사용해서 화면을 변경
  //   const [apple, setApple] = useState("사과");
  //   const inEng2 = () => {
  //     setApple("apple");
  //   };

  //   return (
  //     <div>
  //       <div className="state">{apple}</div>
  //       <button onClick={inEng2}>영어로 변경(function형)</button>
  //     </div>
  //   );

  // 3. vanilla JS 사과 > apple > 사과 > apple

  //   let apple = "사과";
  //   const change = () => {
  //     const content = document.querySelector("state");
  //     content.innerText === "사과"
  //       ? (content.innerText = "apple")
  //       : (content.innerText = "사과");
  //   };

  // 4. state 사용

  const [showEng, setShowEng] = useState(true);

  const changeLeng2 = () => {
    setShowEng(!showEng); // true라면 false로, false라면 true로
  };

  return (
    <div>
      <div className="state">{showEng ? "apple" : "사과"}</div>
      <button onClick={changeLeng2}>영어로 변경(function형)</button>
    </div>
  );
}
