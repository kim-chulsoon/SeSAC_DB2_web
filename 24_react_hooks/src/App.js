import CustomHook from "./components/CustomHook";
import Form from "./components/Form";
import Practice1 from "./components/Practice/Practice";
import UseCallbackEx1 from "./components/UseCallbackEx1";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseMemo1 from "./components/UseMemo1";
import UseMemo2 from "./components/UseMemo2";
import UseReducer from "./components/UseReducer";
import useTitle from "./hooks/useTitle";

function App() {
  useTitle("hook 배워보기");
  return (
    <>
      {/* <UseMemo1 />
      <UseMemo2 /> */}
      {/* <UseCallbackEx1 /> */}
      {/* <UseCallbackEx2 /> */}
      {/* <UseReducer />
       */}
      {/* <CustomHook /> */}
      {/* <Form /> */}
      <Practice1 />
    </>
  );
}

export default App;
