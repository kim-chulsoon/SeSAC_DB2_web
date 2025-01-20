import { useState } from "react";
import Box from "./components/Box";
import Profile from "./components/Profile";
import { ThemaContext } from "./context/ThemaContext";
import { UserContext } from "./context/UserContext";
import { AgeContext } from "./context/AgeContext";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  return (
    <>
      <ThemaContext.Provider value={"dark"}>
        <Box />
      </ThemaContext.Provider>

      <AgeContext.Provider value={{ age, setAge }}>
        <UserContext.Provider value={{ name, setName }}>
          <Profile />
        </UserContext.Provider>
      </AgeContext.Provider>
    </>
  );
}

export default App;
