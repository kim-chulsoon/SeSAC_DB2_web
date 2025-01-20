import { useContext, useRef } from "react";
import { AgeContext } from "../context/AgeContext";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const ageContext = useContext(AgeContext);
  const userContext = useContext(UserContext);
  const { name, setName } = userContext;
  const { age, setAge } = ageContext;
  console.log("age", ageContext);
  console.log("user", userContext);

  const nameRef = useRef();
  const ageRef = useRef();
  const changeInfo = () => {
    setAge(Number(ageRef.current.value));
    setName(nameRef.current.value);
  };

  return (
    <div>
      <h3>사용자 프로필</h3>
      <p>이름 : {name} </p>
      <p>나이 : {age} </p>

      <input type="text" placeholder="이름 입력" ref={nameRef} />
      <input type="number" placeholder="나이 입력" ref={ageRef} />
      <br />
      <button onClick={changeInfo}>바꾸기</button>
    </div>
  );
}
