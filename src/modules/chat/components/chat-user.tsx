import useAuth from "@/hooks/use-auth";
import { getInitialsName } from "@/utils/get-initial-name";
import { Avatar, Flex, Box, Text, Badge, Button } from "@radix-ui/themes";
import { useRouter } from "next/router";
import { IoIosNotifications } from "react-icons/io";
import { RiFacebookCircleFill } from "react-icons/ri";

interface ChatUserProps {
  user: {
    name: string;
    image: string;
  };
}
const ChatUser = (props: ChatUserProps) => {
  const { user } = props;
  const { loginUser } = useAuth();
  const router = useRouter();

  return (
    <Flex
      direction="column"
      className="w-full md:w-1/4 h-full p-4 border-l"
      gap="4"
    >
      <Flex direction="column" gap="4">
        <Text size="4" weight="bold">
          Login As
        </Text>
        <Flex gap="3" align="center">
          <Avatar
            radius="full"
            src={loginUser?.user_metadata?.picture}
            fallback={getInitialsName(loginUser?.user_metadata?.name || "")}
          />
          <Flex direction="column">
            <Text size="2" weight="medium">
              {loginUser?.user_metadata?.name}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {router.query.chat_id && (
        <Flex direction="column">
          <Text size="4" weight="bold">
            Receiver
          </Text>
          <Box
            display={{
              initial: "none",
              md: "block",
            }}
          >
            <Flex align="center" justify="center">
              <Flex direction="column" align="center" justify="center" gap="3">
                <Avatar
                  size="6"
                  src={user.image}
                  fallback={getInitialsName(user.name)}
                  radius="full"
                />
                <Badge color="blue" variant="surface">
                  Verified
                </Badge>
                <Text weight="bold" align="center">
                  {user.name}
                </Text>
                <Flex gap="4" align="center">
                  <Button variant="ghost">
                    <RiFacebookCircleFill size={22} />
                  </Button>
                  <Button variant="ghost">
                    <IoIosNotifications size={24} />
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      )}
    </Flex>
  );
};

export default ChatUser;
