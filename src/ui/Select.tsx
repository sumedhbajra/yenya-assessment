import { Options } from "../features/My Notes/NoteOperation";

interface SelectProps {
  options: Options[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Correct input type for select
  [key: string]: unknown; // Additional props
}

export default function Select({ options, onChange, ...props }: SelectProps) {
  return (
    <select
      onChange={onChange}
      {...props}
      className="uppercase font-bold  text-[1.5rem] w-[12rem] px-[0.5rem] py-[1.1rem] bg-[--color-brand-600] text-white rounded-md shadow-md"
    >
      {options.map((option, key) => (
        <option value={option.value} key={key}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

// import styled from "styled-components";

// const StyledSelect = styled.select`
//   font-size: 1.4rem;
//   padding: 0.8rem 1.2rem;
//   border: 1px solid
//     ${(props) =>
//       props.type === "white"
//         ? "var(--color-grey-100)"
//         : "var(--color-grey-300)"};
//   border-radius: var(--border-radius-sm);
//   background-color: var(--color-grey-0);
//   font-weight: 500;
//   box-shadow: var(--shadow-sm);
// `;

// function Select({ options, value, onChange, ...props }) {
//   console.log(value);
//   return (
//     <StyledSelect value={value} {...props} onChange={onChange}>
//       {options.map((option, key) => (
//         <option value={option.value} key={key}>
//           {option.label}
//         </option>
//       ))}
//     </StyledSelect>
//   );
// }
