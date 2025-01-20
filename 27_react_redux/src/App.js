import { Box1 } from "./components/Box";
import Practice from "./components/Practice";
import Test from "./components/Test";

function App() {
  return (
    <>
      <h1>Redux 사용하기</h1>
      {/* <Test /> */}

      <h2>여러 개의 전역 STATE 사용하기</h2>
      <Box1 />

      <h2>실습</h2>
      <Practice />
    </>
  );
}

export default App;
