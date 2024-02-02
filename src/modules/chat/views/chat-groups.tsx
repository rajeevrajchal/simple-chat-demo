import SearchInput from "@/components/search-input";
import { Box, Flex, Text, Button, Popover } from "@radix-ui/themes";
import ChatUserList from "../components/chat-user-list";
import { FaPlus } from "react-icons/fa";
import ChannelForm from "../components/form/channel-form";

const ChatGroups = () => {
  return (
    <Flex
      direction="column"
      gap="4"
      className="w-[80px] md:w-1/6 h-full py-2 px-4"
      align={{
        initial: "center",
        md: "start",
      }}
    >
      <Flex direction="column" gap="2" width="100%">
        <Flex justify="between">
          <Text size="5" weight="bold">
            Chats
          </Text>
          <Popover.Root>
            <Popover.Trigger>
              <Button variant="soft" radius="full">
                <FaPlus />
                Start Messaging
              </Button>
            </Popover.Trigger>
            <Popover.Content style={{ width: 360 }}>
              <ChannelForm />
            </Popover.Content>
          </Popover.Root>
        </Flex>
        <Box
          display={{
            initial: "none",
            md: "block",
          }}
        >
          <SearchInput />
        </Box>
      </Flex>

      <ChatUserList />
    </Flex>
  );
};

export default ChatGroups;
