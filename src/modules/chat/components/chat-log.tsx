import { Avatar, Box, Flex, Grid, Text } from "@radix-ui/themes";
import MessageForm from "./form/message-form";
import { CHANNEL } from "@/types/channel.type";
import { MESSAGE } from "@/types/message.type";
import { getInitialsName } from "@/utils/get-initial-name";
import useAuth from "@/hooks/use-auth";

interface ChatLogsProps {
  channel: CHANNEL;
}

const ChatLogs = (props: ChatLogsProps) => {
  const { channel } = props;
  const { loginUser } = useAuth();

  return (
    <Box className="flex-1 flex flex-col h-full border ">
      <Box className="h-[6vh] bg-white border-b drop-shadow-xs flex items-center justify-between px-4">
        <Flex gap="3" align="center">
          <Avatar
            radius="full"
            src={
              channel.receiver === loginUser?.id
                ? channel.sender_avatar
                : channel.receiver_avatar
            }
            fallback={getInitialsName(
              channel.receiver === loginUser?.id
                ? channel.sender_name
                : channel.receiver_name
            )}
          />
          <Flex direction="column">
            <Text size="2" weight="medium">
              {channel?.receiver_name}
            </Text>
            <Text size="1" className="text-green-600">
              Active
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Flex direction="column" className="flex-1">
        <Flex
          direction="column"
          className="flex-1 p-4 h-full overflow-y-auto"
          gap="1"
        >
          {(channel?.messages || []).map((message: MESSAGE, index: number) => {
            const isLeft = index % 2 ===0
            return (
              <Flex
                key={`chat-user-message-${index}`}
                align="center"
                gap="2"
                justify={isLeft ? "start" : "end"}
              >
                {isLeft && (
                  <Avatar
                    size="2"
                    src={channel.receiver_avatar}
                    fallback={getInitialsName(channel.receiver_name)}
                    radius="full"
                  />
                )}
                <Text
                  className={`${
                    isLeft ? "bg-gray-200" : "bg-blue-500 text-white"
                  } px-4 py-2 rounded-full ${isLeft ? "mr-auto" : "ml-auto"}`}
                >
                  {message.message}
                </Text>
              </Flex>
            );
          })}
        </Flex>

        <MessageForm
          channel={{
            id: channel.id,
            sender: channel.sender,
            receiver: channel.receiver,
          }}
        />
      </Flex>
    </Box>
  );
};

export default ChatLogs;
