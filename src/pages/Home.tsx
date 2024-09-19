import NoteList from "../ui/NoteList";
import AddNote from "../ui/AddNote";
import ToDoHeader from "../ui/ToDoHeader";
import NoteOperation from "../features/My Notes/NoteOperation";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between h-full py-[100px]">
      <div className="flex flex-col items-center justify-center  gap-5">
        <ToDoHeader />
        <NoteOperation />
        <NoteList />
      </div>
      <AddNote />
    </div>
  );
}
