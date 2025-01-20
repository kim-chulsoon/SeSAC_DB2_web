import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus } from "../store/module/CounterReducer";

export function Box1() {
  return (
    <div style={{ border: "2px solid pink", padding: "10px" }}>
      <h4>BOX1입니다</h4>
      <Box2 />
    </div>
  );
}

export function Box2() {
  //   const state = useSelector((state) => state);
  //   console.log(state); => {isData: false, count: 1}

  const isData = useSelector((state) => state.isData);
  const count = useSelector((state) => state.count);

  console.log("countPlus", countPlus());

  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid skyblue", padding: "10px" }}>
      <h4>BOX2입니다</h4>
      <p>counter : {count} </p>
      <p>isData : {isData.toString()} </p>
      <button
        onClick={() => {
          dispatch({ type: "count/INCREMENT" });
        }}
      >
        count +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "count/DECREMENT" });
        }}
      >
        count -1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "isData/CHANGE" });
        }}
      >
        to {(!isData).toString()}
      </button>
      <br />
      <h5>action return 함수 사용</h5>
      <button
        onClick={() => {
          dispatch(countPlus());
        }}
      >
        count +1
      </button>
      <button
        onClick={() => {
          dispatch(countMinus());
        }}
      >
        count -1
      </button>
    </div>
  );
}
