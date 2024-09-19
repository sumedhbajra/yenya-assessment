import { useSelector } from "react-redux";
import { Note } from "../features/My Notes/noteSlice";
import MyNote from "./MyNote";

export default function NoteList() {
  const notes = useSelector((store: Note[]) => store);

  return (
    <div>
      {notes.note.map((item) => (
        <MyNote
          id={item.id}
          name={item.name}
          isMarked={item.isMarked}
          key={item.id}
        />
      ))}
    </div>
  );
}
