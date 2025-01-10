export default function Select({ setData }) {
  return (
    <div>
      과일 :
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, fruit: e.target.value };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
        <option value="banana">바나나</option>
      </select>
      배경색 :
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, background: e.target.value };
          });
        }}
      >
        <option value="red">빨간색</option>
        <option value="orange">주황색</option>
        <option value="yellow">노란색</option>
        <option value="green">초록색</option>
        <option value="blue">파란색</option>
        <option value="black">검정색</option>
        <option value="white">흰색</option>
      </select>
      글자색 :
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, color: e.target.value };
          });
        }}
      >
        <option value="red">빨간색</option>
        <option value="orange">주황색</option>
        <option value="yellow">노란색</option>
        <option value="green">초록색</option>
        <option value="blue">파란색</option>
        <option value="black">검정색</option>
        <option value="white">흰색</option>
      </select>
    </div>
  );
}
