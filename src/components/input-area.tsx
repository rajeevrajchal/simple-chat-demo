import { TextArea } from "@radix-ui/themes";
import { ChangeEvent } from "react";
import React from "react";

interface InputAreaProps {
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputArea: React.FC<InputAreaProps> = (props) => {
  const { name, value, onChange } = props;
  return (
    <TextArea
      name={name}
      value={value}
      onChange={onChange}
      size="1"
      placeholder="Write your message"
      className="w-full"
    />
  );
};

export default InputArea;
