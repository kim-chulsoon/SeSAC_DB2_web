import useToggle from "../hooks/useToggle";

export default function CustomHook() {
  const [isOPen, setIsOpen] = useToggle();
  return (
    <>
      <h3>custom hook 사용하기</h3>
      <div onClick={setIsOpen}>Q. 리엑트에서 custom hook을 만들 수 있나요</div>
      {isOPen && <span>A. 네 사용할 수 있습니다</span>}
    </>
  );
}
