import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1>404 NOT FOUND</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
