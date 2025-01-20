import { useDispatch, useSelector } from "react-redux";
import { inMoney, outMoney } from "../store/module/BankReducer";
import { useRef, useState } from "react";

export default function Practice() {
  const money = useSelector((state) => state.inOut);
  const dispatch = useDispatch();
  const [inputNumber, setInputNumber] = useState(0);

  return (
    <>
      <h1>코딩온 은행</h1>
      <h3>잔액 : {money.toLocaleString()} 원</h3>
      <input
        type="number"
        step={10000}
        value={inputNumber}
        onChange={(e) => setInputNumber(Number(e.target.value))}
      />
      <button onClick={() => dispatch(inMoney(inputNumber))}>입금</button>
      <button onClick={() => dispatch(outMoney(inputNumber))}>출금</button>
    </>
  );
}
