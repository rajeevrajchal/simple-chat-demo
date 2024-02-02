import { Button, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";

const PasswordInput = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <TextField.Root>
      <TextField.Input
        type={isShow ? "text" : "password"}
        placeholder="******"
      />
      <TextField.Slot>
        <Button variant="ghost" onClick={() => setIsShow(!isShow)}>
          {isShow ? <IoMdEyeOff size={24} /> : <IoEyeSharp size={24} />}
        </Button>
      </TextField.Slot>
    </TextField.Root>
  );
};

export default PasswordInput;
