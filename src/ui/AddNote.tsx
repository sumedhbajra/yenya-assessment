import { AiOutlinePlus } from "react-icons/ai";

export default function AddNote() {
  return (
    <div className="flex justify-end w-[75rem]">
      <button
        className="flex items-center text-center justify-center 
   font-bold text-[1.5rem] p-2 bg-[--color-brand-600] text-white rounded-full
    shadow-md hover:bg-[--color-brand-700] active:bg-[--color-brand-800]"
      >
        <AiOutlinePlus size={36} />
      </button>
    </div>
  );
}
