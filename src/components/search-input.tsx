import { TextField } from "@radix-ui/themes";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <TextField.Root radius="full">
      <TextField.Slot>
        <IoSearch />
      </TextField.Slot>
      <TextField.Input placeholder="Search" />
    </TextField.Root>
  );
};

export default SearchInput;
