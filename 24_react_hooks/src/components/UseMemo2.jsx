import { useEffect, useMemo, useState } from "react";

export default function UseMemo2() {
  const [number, setNunber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = {
  //   country: isKorea ? "korea" : "abroad",
  // };

  const location = useMemo(() => {
    return { country: isKorea ? "korea" : "abroad" };
  }, [isKorea]);

  useEffect(() => {
    console.log("location이 변경됨");
  }, [location]);

  return (
    <>
      <div style={{ border: "1px solid blue" }}>
        <input
          type="number"
          onChange={(e) => setNunber(e.target.value)}
          value={number}
        />
        <p>나라 : {location.country}</p>
        <button onClick={() => setIsKorea(!isKorea)}>나라변경</button>
      </div>
    </>
  );
}
