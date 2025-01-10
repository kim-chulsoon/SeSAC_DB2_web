import React, { useState } from "react";

export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);

  const [input, setInput] = useState("");
  //   console.log([1, 2, 3, 4].concat(10));

  const addAlpha = () => {
    const newList = list.concat({
      id: list.length == 0 ? 1 : list[list.length - 1] + 1,
      alpha: input,
    });
    setList(newList);
    setInput("");
  };

  const activeEnter = (e) => {
    if (e.key == "Enter") {
      addAlpha();
    }
  };

  const deleteAlpha = (id) => {
    const newAlpha = list.filter((alpha) => {
      return alpha.id !== id;
    });
    setList(newAlpha);
  };

  return (
    <div>
      <h2>alphabet</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={activeEnter}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {list.map((el) => {
          return (
            <li
              key={el.id}
              onDoubleClick={() => {
                deleteAlpha(el.id);
              }}
            >
              {el.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
