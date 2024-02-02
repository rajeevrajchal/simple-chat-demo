import React from "react";
import ChatLogs from "../components/chat-log";
import ChatUser from "../components/chat-user";
import useChannel from "@/hooks/data/channel/use-channel";
import { Text, Flex } from "@radix-ui/themes";
import { useRouter } from "next/router";
import { MoonLoader } from "react-spinners";
import useAuth from "@/hooks/use-auth";

const ChatMessage = () => {
  const { channel, loading } = useChannel();
  const { loginUser } = useAuth();

  const router = useRouter();

  if (loading) {
    return (
      <div className="h-full w-full grid place-content-center">
        <MoonLoader color="blue" />
      </div>
    );
  }

  return (
    <div className="h-full flex-1 flex items-start">
      {!router.query.chat_id || router.query.chat_id === undefined ? (
        <div className="flex-1 grid h-full place-content-center border-l">
          <Text>No Channel Selected</Text>
        </div>
      ) : (
        <ChatLogs channel={channel} />
      )}
      <ChatUser
        user={{
          name:
            channel.receiver === loginUser?.id
              ? channel.sender_name
              : channel.receiver_name,
          image:
            channel.receiver === loginUser?.id
              ? channel.sender_avatar
              : channel.receiver_avatar,
        }}
      />
    </div>
  );
};

export default ChatMessage;
