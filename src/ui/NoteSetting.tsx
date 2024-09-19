import { BsPencil } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";

export default function NoteSetting() {
  const cssEffect =
    "opacity-25 hover:text-[--color-brand-700] hover:opacity-90 transition-opacity transition-colors duration-300 ease-in-out";

  function onEdit() {}
  function onDelete() {}

  return (
    <div className="flex gap-5">
      <span className={cssEffect} onClick={onEdit}>
        <BsPencil size={20} />
      </span>
      <span className={cssEffect} onClick={onDelete}>
        <BsTrash3 size={20} />
      </span>
    </div>
  );
}
