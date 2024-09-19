import { BiSearch } from "react-icons/bi";

export default function ToDoSearch() {
  return (
    <>
      <input
        type="text"
        placeholder="Search note..."
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
        className="input w-[55rem] focus:outline-none"
      />
      <BiSearch size={25} className="text-[--color-brand-500]" />
    </>
  );
}
