import { useSelector } from "react-redux";
import { Note } from "../features/My Notes/noteSlice";
import MyNote from "./MyNote";
import EmptyData from "./EmptyData";
import { useSearchParams } from "react-router-dom";

export default function NoteList() {
  const notes = useSelector((store: Note[]) => store);
  const [searchParam] = useSearchParams();

  let myNote: Note[];

  if (
    searchParam.get("sortBy") === null ||
    searchParam.get("sortBy") === "all"
  ) {
    myNote = notes.note;
  }

  if (searchParam.get("sortBy") === "marked") {
    myNote = notes.note.filter((note) => note.isMarked === true);
  }
  if (searchParam.get("sortBy") === "unmarked") {
    myNote = notes.note.filter((note) => note.isMarked === false);
  }

  // const markedNote: Note = [];
  // const unmarkedNote: Note = [];

  return (
    <div>
      {myNote.length ? (
        myNote.map((item) => (
          <MyNote
            id={item.id}
            name={item.name}
            isMarked={item.isMarked}
            key={item.id}
          />
        ))
      ) : (
        <div className="flex flex-col gap-40 mt-[10rem]">
          <EmptyData />
          <h1 className="text-[2rem]">Empty...</h1>
        </div>
      )}
    </div>
  );
}
