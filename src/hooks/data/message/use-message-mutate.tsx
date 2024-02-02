import supabase from "@/plugins/supabase";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export interface SEND_MESSAGE {
  channel_id: string;
  sender: string;
  receiver: string;
  message: string;
}

const useMessageMutate = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const sendMessage = useMutation({
    mutationFn: async (payload: SEND_MESSAGE) =>
      await supabase.from("messages").insert(payload).single(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["channel", router.query.chat_id],
      });
    },
  });

  return {
    sendMessage,
  };
};

export default useMessageMutate;
