import { useState } from "react";
import {
  deleteNote,
  markNote,
  Note,
  updateNote,
} from "../features/My Notes/noteSlice";
import { useDispatch, useSelector } from "react-redux";
import NoteSetting from "./NoteSetting";
import Modal from "./Modal";
import Button from "./Button";

export default function MyNote({ id, name, isMarked }: Note) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const dispatch = useDispatch();

  function onChange() {
    console.log(id, " this is idd");
    dispatch(markNote(id));
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Modal>
      <div
        className="flex p-[20px] w-[50rem] justify-between"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center justify-center gap-7">
          <input
            className="w-12 h-12 appearance-none border-2 border-[--color-brand-400] checked:bg-[--color-brand-400] rounded"
            type="checkbox"
            checked={isMarked}
            onChange={onChange}
          />
          <span className="font-bold text-[1.9rem]">{name}</span>
        </div>
        <div>
          <div
            className={`transition-opacity duration-200 ease-in-out transform ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <NoteSetting />
          </div>
        </div>
        <Modal.Window name="delete">
          <NoteDelete id={id} close={close} />
        </Modal.Window>

        <Modal.Window name="edit">
          <NoteEdit id={id} close={close} />
        </Modal.Window>
      </div>
    </Modal>
  );
}

interface NoteOperation {
  id: number;
  close: () => void;
}

function NoteDelete({ id, close }: NoteOperation) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-[2.5rem]">Delete Note</h1>
      <span>Are you sure you want to delete this note?</span>
      <span className="flex justify-between">
        <Button variation="secondary" onClick={close}>
          Cancel
        </Button>
        <Button
          variation="danger"
          onClick={() => {
            dispatch(deleteNote(id));
          }}
        >
          Delete
        </Button>
      </span>
    </div>
  );
}

function NoteEdit({ id, close }: NoteOperation) {
  const selector = useSelector((element: Note) => element.note);
  const dispatch = useDispatch();

  const [note, setNote] = useState<string>(
    selector.filter((note: Note) => note.id === id)[0].name
  );

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-[2.5rem]">Update</h1>
      <form>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Edit note here..."
          className="w-[50rem] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
      <span className="flex justify-between">
        <Button variation="secondary" onClick={close}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            dispatch(updateNote(id, note));
            close();
          }}
        >
          Update
        </Button>
      </span>
    </div>
  );
}

// nth child css & .map index
