import React, { useState } from "react";
import { markNote, Note } from "../features/My Notes/noteSlice";
import { useDispatch } from "react-redux";
import NoteSetting from "./NoteSetting";

export default function MyNote({ id, name, isMarked }: Note) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const dispatch = useDispatch();

  function onChange() {
    dispatch(markNote(id));
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
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
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <NoteSetting id={id} />
        </div>
      </div>
    </div>
  );
}
