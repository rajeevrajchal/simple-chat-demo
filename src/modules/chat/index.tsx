import ChatGroups from "./views/chat-groups";
import ChatMessage from "./views/chat-message";

const Chat = () => {
  return (
    <main className="h-screen w-screen flex items-start">
      <ChatGroups />
      <ChatMessage />
    </main>
  );
};

export default Chat;
