import PasswordInput from "@/components/password-input";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { IoIosMail } from "react-icons/io";

const LoginForm = () => {
  return (
    <Flex
      direction="column"
      className="border min-h-[10vh] rounded-md p-4"
      width="100%"
      gap="4"
    >
      <Text size="3" weight="bold">
        Login
      </Text>
      <TextField.Root>
        <TextField.Slot>
          <IoIosMail size={24} />
        </TextField.Slot>
        <TextField.Input placeholder="Your Email" />
      </TextField.Root>
      <PasswordInput />
      <Button className="w-full">Login</Button>
    </Flex>
  );
};

export default LoginForm;
