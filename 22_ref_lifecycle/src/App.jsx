import LifeCycleClass from "./components/LifecycleClass";
import LifeCycleFunc from "./components/LifecycleFunc";
import FakePost from "./components/FakePost";
import Container from "./components/LifecyclePractice";
import PostList from "./components/LifecyclePractice";
import RealPost from "./components/RealPost";
import { RefClass1, RefClass2 } from "./components/RefCleass";
import { RefFunc1, RefFunc2 } from "./components/RefFunc";
import Test from "./components/test";
import Ref1 from "./components/practice/Ref1";
import Ref2 from "./components/practice/Ref2";

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
      {/* <Container>
        <RealPost />
      </Container> */}
      {/* <Ref1 /> */}
      <Ref2 />
    </div>
  );
}

export default App;
