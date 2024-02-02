import useAuth from "@/hooks/use-auth";
import { Button, Flex } from "@radix-ui/themes";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { loginGoogle } = useAuth();

  return (
    <Flex align="center" justify="center">
      <Button variant="ghost" onClick={() => loginGoogle.mutate()}>
        <FcGoogle size={42} />
      </Button>
    </Flex>
  );
};

export default SocialLogin;
