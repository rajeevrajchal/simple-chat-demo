import { Flex, Select, Text } from "@radix-ui/themes";

type OPTION = {
  label: string;
  value: string;
};

interface SelectInputProps {
  options: OPTION[];
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

const SelectInput = (props: SelectInputProps) => {
  const { options, label, value, onChange } = props;
  return (
    <Flex direction="column" gap="1">
      {label && <Text>{label}</Text>}
      <Select.Root
        defaultValue={value}
        onValueChange={(value) => onChange(value)}
      >
        <Select.Trigger placeholder="Select" className="w-full" radius="full" />
        <Select.Content>
          {options.map((option: OPTION, index: number) => (
            <Select.Item
              key={`select-option-${option.value}-${index}`}
              value={option.value}
            >
              {option.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};

export default SelectInput;
