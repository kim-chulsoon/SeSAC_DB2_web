import { useCallback, useEffect, useState } from "react";

export default function UseCallbackEx2() {
  const [text, setText] = useState("");

  //   const onChangeText = (e) => {
  //     setText(e.target.value);
  //   };

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <input type="text" onChange={onChangeText} />
      <p>작성한 값 : {text}</p>
    </div>
  );
}
