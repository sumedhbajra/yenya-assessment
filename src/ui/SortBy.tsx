import { useSearchParams } from "react-router-dom";
import { Options } from "../features/My Notes/NoteOperation";
import Select from "./Select";

export interface SortBy {
  options: Options[];
}

export default function SortBy({ options }: SortBy) {
  const [searchParams, setSearchParams] = useSearchParams();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return <Select options={options} onChange={onChange} />;
}

// function SortBy({ options }) {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const sortBy = searchParams.get("sortBy") || "";

//   function handleChange(e) {
//     searchParams.set("sortBy", e.target.value);
//     setSearchParams(searchParams);
//   }

//   return (
//     <Select
//       options={options}
//       onChange={handleChange}
//       type={"white"} // as ...props
//       value={sortBy}
//     />
//   );
// }
