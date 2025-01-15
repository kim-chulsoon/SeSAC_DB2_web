import { useRef } from "react";

export default function Ref2() {
  const number = Math.round(Math.random() * 10);
  const number2 = Math.round(Math.random() * 10);
  const operator = ["+", "-", "*"];
  const randomOper = operator[Math.floor(Math.random() * 3)];
  let answer;
  if (randomOper == "+") {
    answer = number + number2;
  } else if (randomOper == "-") {
    answer = number - number2;
  } else if (randomOper == "*") {
    answer = number * number2;
  }

  const ref = useRef();

  const handleFocus = () => {
    ref.current.focus();
  };

  const handleAnswer = () => {
    answer == ref.current.value ? alert("정답입니다") : alert("오답입니다");
    ref.current.focus();
    ref.current.value = " ";
  };

  return (
    <div>
      <h3>
        {number} {randomOper} {number2}
      </h3>
      <input type="text" ref={ref} />
      <br />
      <button onClick={handleAnswer}>정답 제출</button>
    </div>
  );
}
