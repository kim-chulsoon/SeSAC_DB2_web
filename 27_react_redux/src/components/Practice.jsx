import { useDispatch, useSelector } from "react-redux";
import { inMoney, outMoney } from "../store/module/BankReducer";
import { useRef } from "react";

export default function Practice() {
  const money = useSelector((state) => state.inOut);
  const dispatch = useDispatch();
  const ref = useRef(0);

  return (
    <>
      <h1>코딩온 은행</h1>
      <h3>잔액 : {money} 원</h3>
      <input type="number" step={10000} ref={ref} />
      <button onClick={() => dispatch(inMoney(Number(ref.current.value)))}>
        입금
      </button>
      <button onClick={() => dispatch(outMoney(Number(ref.current.value)))}>
        출금
      </button>
    </>
  );
}
