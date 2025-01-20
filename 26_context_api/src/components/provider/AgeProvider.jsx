import { useState } from "react";
import { AgeContext } from "../../context/AgeContext";

export default function AgeProvider({ children }) {
  const [age, setAge] = useState("");
  return (
    <AgeContext.Provider value={{ age, setAge }}>
      {children}
    </AgeContext.Provider>
  );
}
