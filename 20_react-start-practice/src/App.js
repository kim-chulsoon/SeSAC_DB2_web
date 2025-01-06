function App() {
  const name = "댕댕이";
  const animal = "강아지";
  const a = 2;
  const b = 1;
  return (
    <div>
      <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <br />
      <h2>
        {name}는 {animal}입니다.
      </h2>
      <div>{3 + 5 == 8 ? "정답입니다" : "오답입니다"}</div>
      <div>{a > b && "a가 b보다 큽니다"}</div>
    </div>
  );
}

export default App;
