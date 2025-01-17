import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <span>logo</span>
      <div>
        <Link to={"/"}>홈으로</Link>
        <Link to={"/test"}>테스트</Link>
        <Link to={"/product"}>상품</Link>
      </div>
    </header>
  );
}
