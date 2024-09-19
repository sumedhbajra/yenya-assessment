export interface Note {
  id: number;
  name: string;
  isMarked: boolean;
}

interface Action {
  type: string;
  payload: Note | number; // Changed to any to handle different payloads (Note or id)
}

const notes: Note[] = [
  { id: 1, name: "NOTE #1", isMarked: false },
  { id: 2, name: "NOTE #2", isMarked: false },
  { id: 3, name: "NOTE #3", isMarked: false },
  { id: 4, name: "NOTE #4", isMarked: false },
];

export default function noteReducer(state: Note[] = notes, action: Action) {
  switch (action.type) {
    case "note/add":
      return [...state, action.payload];

    case "note/update": {
      // Create a new array and update the note with the same id
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, name: action.payload.name }
          : note
      );
    }

    case "note/delete":
      // Remove the note with the given id
      return state.filter((el) => el.id !== action.payload);

    case "note/mark": {
      // Toggle the isMarked property of the note with the given id
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, isMarked: !note.isMarked }
          : note
      );
    }

    default:
      return state;
  }
}

export function addNote(newNote: Note) {
  return { type: "note/add", payload: newNote };
}

export function updateNote(updatedNote: Note) {
  return { type: "note/update", payload: updatedNote }; // Updated to accept the full Note
}

export function deleteNote(id: number) {
  return { type: "note/delete", payload: id };
}

export function markNote(id: number) {
  return { type: "note/mark", payload: id };
}
