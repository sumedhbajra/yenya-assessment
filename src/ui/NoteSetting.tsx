import { BsPencil } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";
import Modal from "./Modal";

export default function NoteSetting() {
  const cssEffect =
    "opacity-25 hover:text-[--color-brand-700] hover:opacity-90 transition-opacity transition-colors duration-300 ease-in-out";

  return (
    <div className="flex gap-5">
      <span className={cssEffect}>
        <Modal.Open opens="edit">
          <BsPencil size={20} />
        </Modal.Open>
      </span>
      <span className={cssEffect}>
        <Modal.Open opens="delete">
          <BsTrash3 size={20} />
        </Modal.Open>
      </span>
    </div>
  );
}
