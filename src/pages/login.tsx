import LoginForm from "@/modules/login/components/login-form";
import SocialLogin from "@/modules/login/components/social-login";
import { Flex, Text } from "@radix-ui/themes";

const Login = () => {
  return (
    <Flex className="h-screen w-screen" align="center" justify="center">
      <Flex
        direction="column"
        className="w-full md:w-2/4 lg:w-1/4 p-4 md:p-0"
        gap="4"
      >
        <Text size="6" weight="bold">
          Welcome to, Chat App
        </Text>
        <LoginForm />
        <Text size="6" weight="bold" align="center">
          -- OR --
        </Text>
        <SocialLogin />
      </Flex>
    </Flex>
  );
};

export default Login;
