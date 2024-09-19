import SearchBar from "../../ui/SearchBar";
import SortBy from "../../ui/SortBy";
import ThemeButton from "../../ui/ThemeButton";

export enum OptionValues {
  All = "all",
  Marked = "marked",
  Unmarked = "unmarked",
}

export interface Options {
  value: OptionValues;
  label: string;
}

export default function NoteOperation() {
  return (
    <div className="flex gap-8 items-center">
      <SearchBar />
      <SortBy
        options={[
          { value: OptionValues.All, label: "All" },
          { value: OptionValues.Marked, label: "Marked" },
          { value: OptionValues.Unmarked, label: "Unmarked" },
        ]}
      />
      <ThemeButton />
    </div>
  );
}
