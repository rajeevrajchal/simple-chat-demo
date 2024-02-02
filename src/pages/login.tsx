import LoginForm from "@/modules/login/components/login-form";
import SocialLogin from "@/modules/login/components/social-login";
import { Flex, Text } from "@radix-ui/themes";

const Login = () => {
  return (
    <Flex
      className="h-screen w-screen bg-gray-200"
      align="center"
      justify="center"
    >
      <Flex
        direction="column"
        className="w-full md:w-2/4 lg:w-1/4 bg-white drop-shadow-lg rounded-xl p-4"
        gap="4"
        align="center"
      >
        <Text size="6" weight="bold">
          Chat App
        </Text>
        <Text size="2">Login to continue</Text>
        {/* <LoginForm />
        <Text size="6" weight="bold" align="center">
          -- OR --
        </Text> */}
        <SocialLogin />
      </Flex>
    </Flex>
  );
};

export default Login;
