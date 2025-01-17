import { useState } from "react";

export default function useToggle(initialState = false) {
  const [value, setValue] = useState(initialState);

  const toggleValue = () => setValue(!value);

  return [value, toggleValue];
}
