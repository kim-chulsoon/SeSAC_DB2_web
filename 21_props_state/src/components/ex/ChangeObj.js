import { useState } from "react";

export default function ChangeObj(props) {
  console.log(props.objArr.length);
  const [member, setMember] = useState(0);
  const changeMember = () => {
    if (member === props.objArr.length - 1) {
      return setMember(0);
    } else {
      setMember(member + 1);
    }
  };
  return (
    <div>
      <div>이름 : {props.objArr[member].name}</div>
      <div>나이 : {props.objArr[member].age}</div>
      <div>별명 : {props.objArr[member].nickName}</div>
      <button onClick={changeMember}>맴버 바꾸기</button>
    </div>
  );
}
