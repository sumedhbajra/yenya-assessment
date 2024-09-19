import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
    <div className="flex gap-5 border-2 border-[--color-brand-400] rounded-md items-center px-4 py-[3px]">
      <input
        type="text"
        placeholder="Search note..."
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
        className="input w-[55rem] h-[3rem] focus:outline-none"
      />
      <BiSearch size={25} className="text-[--color-brand-500]" />
    </div>
  );
}
