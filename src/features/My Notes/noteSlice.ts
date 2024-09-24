export interface Note {
  id: number;
  name?: string;
  isMarked?: boolean;
}

// Action interface definition
interface Action {
  type: string;
  payload: Note;
}

// Default notes
// const defaultNotes: Note[] = [
//   { id: 1, name: "NOTE #1", isMarked: false },
//   { id: 2, name: "NOTE #2", isMarked: false },
//   { id: 3, name: "NOTE #3", isMarked: false },
//   { id: 4, name: "NOTE #4", isMarked: false },
// ];

const loadNotesFromLocalStorage = (): Note[] => {
  const storedNotes = localStorage.getItem("notes");
  console.log(storedNotes);
  return storedNotes ? JSON.parse(storedNotes) : [];
};

const saveNotesToLocalStorage = (notes: Note[]) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export default function noteReducer(
  state: Note[] = loadNotesFromLocalStorage(),
  action: Action
) {
  switch (action.type) {
    case "note/add": {
      const newNote: Note = {
        id: action.payload.id,
        name: action.payload.name,
        isMarked: false,
      };
      const newState = [...state, newNote];
      saveNotesToLocalStorage(newState);
      return newState;
    }

    case "note/update": {
      const updatedState = state.map((note) =>
        note.id === action.payload.id
          ? { ...note, name: action.payload.name }
          : note
      );
      saveNotesToLocalStorage(updatedState);
      return updatedState;
    }

    case "note/delete": {
      const deleteNote = state.filter((el) => el.id !== action.payload.id);
      saveNotesToLocalStorage(deleteNote);
      return deleteNote;
    }

    case "note/mark": {
      const updatedState = state.map((note) =>
        note.id === action.payload.id
          ? { ...note, isMarked: !note.isMarked }
          : note
      );
      saveNotesToLocalStorage(updatedState);
      return updatedState;
    }

    default:
      return state;
  }
}

export function addNote(name: string) {
  const notes = loadNotesFromLocalStorage();
  const newId = notes.length
    ? Math.max(...notes.map((note) => note.id)) + 1
    : 1; // Get next unique id
  const newNote: Note = {
    id: newId,
    name: name,
    isMarked: false,
  };
  return { type: "note/add", payload: newNote };
}

export function updateNote(id: number, name: string) {
  const updateNote: Note = {
    id,
    name,
  };
  return { type: "note/update", payload: updateNote };
}

export function deleteNote(id: number) {
  const markNote: Note = {
    id,
  };
  return { type: "note/delete", payload: markNote };
}

export function markNote(id: number) {
  const markNote: Note = {
    id,
  };
  return { type: "note/mark", payload: markNote };
}
