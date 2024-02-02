import InputArea from "@/components/input-area";
import useMessageMutate, {
  SEND_MESSAGE,
} from "@/hooks/data/message/use-message-mutate";
import { CHANNEL } from "@/types/channel.type";
import { Flex, Button } from "@radix-ui/themes";
import { useFormik } from "formik";
import React from "react";
import { IoIosAttach, IoMdSend } from "react-icons/io";

interface MessageFormProps {
  channel: Pick<CHANNEL, "id" | "receiver" | "sender">;
}
const MessageForm = (props: MessageFormProps) => {
  const { channel } = props;
  const { sendMessage } = useMessageMutate();

  const messageForm = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      const payload = {
        channel_id: channel.id,
        sender: channel.sender,
        receiver: channel.receiver,
        message: values.message,
      };
      sendMessage.mutate(payload as SEND_MESSAGE);
    },
  });

  return (
    <Flex className="p-4 border-t" width="100%" gap="4" align="center">
      <Button variant="ghost">
        <IoIosAttach size={28} />
      </Button>
      <InputArea
        name="message"
        value={messageForm.values.message}
        onChange={messageForm.handleChange}
      />
      <Button variant="ghost" onClick={() => messageForm.handleSubmit()}>
        <IoMdSend size={28} />
      </Button>
    </Flex>
  );
};

export default MessageForm;
