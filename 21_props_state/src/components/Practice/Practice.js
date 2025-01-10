import { Component, useState } from "react";

export class ClassStateP extends Component {
  state = {
    number: 0,
  };

  render() {
    const number = this.state;
    return (
      <div>
        <span>{number.number}</span>
        <br />
        <button
          onClick={() => {
            this.setState({ number: number.number + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ number: number.number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export function FunctionStateP() {
  const [number, setNumber] = useState(0);
  const incre = () => {
    setNumber(number + 1);
  };
  const decre = () => {
    setNumber(number - 2);
  };
  return (
    <div>
      <p>{number}</p>
      <button onClick={incre}>+1</button>
      <button onClick={decre}>-2</button>
    </div>
  );
}
