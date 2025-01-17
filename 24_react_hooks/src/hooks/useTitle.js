import { useEffect } from "react";

export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    console.log(prevTitle);
    document.title = title;

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
