import { Component, useState } from "react";

export class HandlerEx extends Component {
  state = {
    hello: "Hello World!",
  };

  render() {
    const { hello } = this.state;
    return (
      <div>
        <p>{hello}</p>
        <button
          onClick={() => {
            this.setState({ hello: "Goodbye World!" });
          }}
        >
          바꾸기
        </button>
      </div>
    );
  }
}

export function ChangeTextColor() {
  const [text, setText] = useState(<p>검정색 글씨</p>);

  const redText = () => {
    setText(<p style={{ color: "red" }}>빨간색 글씨</p>);
  };

  const blueText = () => {
    setText(<p style={{ color: "blue" }}>파란색 글씨</p>);
  };
  return (
    <div>
      {text}
      <button onClick={redText}>빨간색</button>
      <button onClick={blueText}>파란색</button>
    </div>
  );
}

export function InOutText() {
  const [text, setText] = useState(true);

  const changeText = () => {
    setText(!text);
  };
  return (
    <div>
      <button onClick={changeText}>{text ? "사라져라" : "보여라"}</button>
      <div>{text ? "안녕하세요" : ""}</div>
    </div>
  );
}

export function Emoji() {
  const [number, setNumber] = useState(0);

  const increNum = () => {
    setNumber(number + 1);
  };

  const decreNum = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <div>
        {number}
        {number >= 8 ? "❤️" : "💔"}
      </div>
      <br />
      <button onClick={increNum}>1증가</button>
      <button onClick={decreNum}>1감소</button>
    </div>
  );
}
