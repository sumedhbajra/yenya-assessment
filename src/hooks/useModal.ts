import { useEffect, useRef } from "react";

// Define a type for the close function
interface UseModalReturn {
  ref: React.RefObject<HTMLDivElement>;
}

export function useModal(close: () => void): UseModalReturn {
  // Use the correct type for the ref
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // Check if ref.current exists and if e.target is not contained within it
      if (ref.current && !ref.current.contains(e.target as Node)) {
        console.log("Clicked outside");
        close();
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, close]);

  return { ref };
}
