import NoteList from "../ui/NoteList";
import ToDoHeader from "../ui/ToDoHeader";
import NoteOperation from "../features/My Notes/NoteOperation";
import AddNoteButton from "../ui/AddNoteButton";
import Modal from "../ui/Modal";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between h-full py-[100px]">
      <div className="flex flex-col items-center justify-center  gap-5">
        <ToDoHeader />
        <NoteOperation />
        <Modal>
          <NoteList />
        </Modal>
      </div>

      <AddNoteButton />
    </div>
  );
}
