import { ClassProps, ClassProps2 } from "./components/ClassProps";
import ClassState from "./components/ClassState";
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";
import FunctionState from "./components/FunctionState";
import { ClassStateP, FunctionStateP } from "./components/Practice/Practice";
import SyntheticEvent from "./components/SyntheticEvent";
import Counter from "./components/Counter";
import {
  HandlerEx,
  ChangeTextColor,
  InOutText,
  Emoji,
} from "./components/ex/HandlerEx";
import PororoObj from "./components/ex/Change";

function App() {
  return (
    <div>
      {/* <h2>Props 사용</h2>
      <h3>Class형 컴포넌트 Props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps2 name="루피" color="pink" nickname="공주" fontColor="blue" />

      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스캣" number={1} krPrice={15000} />
      <FunctionProps4 name="딸기">
        <span style={{ color: "red" }}>children 요소 입니다</span>
      </FunctionProps4>

      <h2>State</h2>
      <h3>클래스형 state 사용해보기</h3>
      <ClassState />
      <h3>함수형 state 사용해보기</h3>
      <FunctionState />

      <h2>Event</h2>
      <SyntheticEvent />
      <Counter /> */}

      <h2>Practice</h2>
      <h3>ClassState</h3>
      <ClassStateP />
      <h3>FunctionState</h3>
      <FunctionStateP />
      <h3>핸들러1</h3>
      <HandlerEx />
      <h3>핸들러2</h3>
      <ChangeTextColor />
      <h3>핸들러3</h3>
      <InOutText />
      <h3>핸들러4</h3>
      <Emoji />
      <h3>핸들러5</h3>
      <PororoObj />
    </div>
  );
}

export default App;
