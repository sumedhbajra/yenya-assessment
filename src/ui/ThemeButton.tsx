import { useEffect, useState } from "react";
import { AiOutlineMoon } from "react-icons/ai";

export default function ThemeButton() {
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // document.documentElement.classList.toggle("dark");
  }, [isDark]);
  return (
    <div
      className="flex items-center text-center justify-center 
    uppercase font-bold text-[1.5rem] w-[4.3rem] 
    h-[4.3rem] bg-[--color-brand-600] text-white rounded-md 
    shadow-md hover:bg-[--color-brand-700] active:bg-[--color-brand-800]"
      onClick={() => setIsDark((e) => !e)}
    >
      <AiOutlineMoon size={30} />
    </div>
  );
}
