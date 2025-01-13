import LifeCycleClass from "./components/LifecycleClass";
import LifeCycleFunc from "./components/LifecycleFunc";
import FakePost from "./components/practice/FakePost";
import Container from "./components/practice/LifecyclePractice";
import PostList from "./components/practice/LifecyclePractice";
import RealPost from "./components/practice/RealPost";
import { RefClass1, RefClass2 } from "./components/RefCleass";
import { RefFunc1, RefFunc2 } from "./components/RefFunc";
import Test from "./components/test";

function App() {
  return (
    <div>
      {/* ref */}
      {/* <RefClass1 />
      <RefClass2 />
      <RefFunc1 />
      <RefFunc2 /> */}
      {/* life cycle */}
      {/* <LifeCycleClass /> */}
      {/* <LifeCycleFunc /> */}
      {/* <Test /> */}
      <Container>
        <RealPost />
      </Container>
    </div>
  );
}

export default App;
