import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import Button from "./Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/My Notes/noteSlice";

export default function AddNoteButton() {
  const [note, setNote] = useState<string>("");

  return (
    <div className="flex justify-end w-[75rem]">
      <Modal>
        <button></button>
        <Modal.Open opens="delete">
          <button
            className="flex items-center text-center justify-center 
            font-bold text-[1.5rem] p-2 bg-[--color-brand-600] text-white rounded-full
            shadow-md hover:bg-[--color-brand-700] active:bg-[--color-brand-800]"
          >
            <AiOutlinePlus size={36} />
          </button>
        </Modal.Open>
        <Modal.Window name="delete">
          <AddNote note={note} setNote={setNote} close={close} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

interface AddNoteProps {
  note: string;
  setNote: (note: string) => void;

  close: () => void;
}

function AddNote({ note, setNote, close }: AddNoteProps) {
  const dispatch = useDispatch();

  function onApply() {
    if (!note) return;
    dispatch(addNote(note));
    setNote("");
    close();
  }

  return (
    <div className="flex flex-col gap-7 items-center">
      <h1 className="font-bold text-[2.5rem]">New Note</h1>
      <form>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter a new note"
          className="w-[50rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
      <div className="flex justify-between w-full mt-[12rem]">
        <Button variation="secondary" onClick={close}>
          Cancel
        </Button>
        <Button onClick={onApply}>Apply</Button>
      </div>
    </div>
  );
}
