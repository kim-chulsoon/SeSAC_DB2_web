import { Route, Routes } from "react-router-dom";
import Index from "./pages/Intex";
import Err from "./pages/404";
import PracticeHeader from "./components/PracticeHaeder";
import "./style/commm.css";
import Student from "./pages/Student";

function App() {
  return (
    <>
      <PracticeHeader />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/student/:name" element={<Student />} />
        <Route path="*" element={<Err />} />
      </Routes>
    </>
  );
}

export default App;
