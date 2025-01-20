import { useContext } from "react";
import { ThemaContext } from "../context/ThemaContext";

export default function Box() {
  const themaContext = useContext(ThemaContext);
  console.log(themaContext);
  return (
    <div>
      <h3>ThemeContext 사용하기</h3>
      Theme : {themaContext}
    </div>
  );
}
