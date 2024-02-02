import SelectInput from "@/components/select-input";
import useAuth from "@/hooks/use-auth";
import useChannelMutate, {
  STORE_CHANNEL,
} from "@/hooks/data/channel/use-channel-mutate";
import { Button, Flex } from "@radix-ui/themes";
import { useFormik } from "formik";
import useUsers from "@/hooks/data/user/use-users";
import { USER } from "@/types/user.model";

const ChannelForm = () => {
  const { loginUser } = useAuth();
  const { storeChannel } = useChannelMutate();
  const { users } = useUsers();

  const channelForm = useFormik({
    initialValues: {
      receiver: "",
    },
    onSubmit: (values, { resetForm }) => {
      const getUser = users.find(
        (user: { auth_user_id: string }) =>
          user.auth_user_id === values.receiver
      );

      const payload = {
        sender: loginUser?.id,
        receiver: values.receiver,
        sender_name: loginUser?.user_metadata?.name,
        sender_avatar:
          loginUser?.user_metadata?.picture ||
          loginUser?.user_metadata?.avatar_url,
        receiver_avatar: getUser?.picture,
        receiver_name: getUser?.name,
      };
      storeChannel.mutate(payload as STORE_CHANNEL);
      resetForm();
    },
  });

  return (
    <Flex direction="column" width="100%" gap="4">
      <SelectInput
        value={channelForm.values.receiver}
        label="Select User"
        onChange={(value) => channelForm.setFieldValue("receiver", value)}
        options={users.map((user: { name: string; auth_user_id: string }) => ({
          label: `${user.name}-${user?.auth_user_id}`,
          value: user?.auth_user_id,
        }))}
      />
      <Flex align="center" justify="end" gap="4">
        {/* <Button variant="ghost">Cancel</Button> */}
        <Button
          variant="soft"
          radius="full"
          type="submit"
          onClick={() => channelForm.handleSubmit()}
        >
          {storeChannel?.isPending ? "loading..." : "Start"}
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChannelForm;
