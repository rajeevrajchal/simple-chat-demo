import AppRoute from "@/constant/app-route";
import useChannels from "@/hooks/data/channel/use-channels";
import useAuth from "@/hooks/use-auth";
import { CHANNEL } from "@/types/channel.type";
import { getInitialsName } from "@/utils/get-initial-name";
import { Grid, Flex, Avatar, Text, Button } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { MoonLoader } from "react-spinners";

const ChatUserList = () => {
  const router = useRouter();
  const { loginUser } = useAuth();
  const { channels, loading } = useChannels();

  if (loading) {
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        width="100%"
        gap="4"
      >
        <MoonLoader color="blue" />
      </Flex>
    );
  }

  if (channels?.length <= 0) {
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        width="100%"
        gap="4"
      >
        <Text>No Channels</Text>
      </Flex>
    );
  }

  return (
    <Grid columns="1" gap="2" width="100%">
      {channels.map((channel: CHANNEL, index: number) => (
        <Link
          href={AppRoute.chat_user(channel.id)}
          key={`chat-group-${index}-${channel}`}
        >
          <Flex
            gap="3"
            align="center"
            p="2"
            className={`${
              String(router.query.chat_id) === channel.id
                ? "bg-gray-200"
                : "inherit"
            } hover:bg-gray-300 rounded-lg`}
          >
            <Avatar
              radius="full"
              src={
                channel.sender === loginUser?.id
                  ? channel.receiver_avatar
                  : channel.sender_avatar
              }
              fallback={getInitialsName(
                channel.sender === loginUser?.id
                  ? channel.receiver_name
                  : channel.sender_name
              )}
            />
            <Flex
              direction="column"
              display={{
                initial: "none",
                md: "flex",
              }}
            >
              <Text size="2" weight="medium">
                {channel.sender === loginUser?.id
                  ? channel.receiver_name
                  : channel.sender_name}
              </Text>
              <Text size="1" className="text-gray-500">
                {channel.messages[0]?.message}
              </Text>
            </Flex>
          </Flex>
        </Link>
      ))}
    </Grid>
  );
};

export default ChatUserList;
