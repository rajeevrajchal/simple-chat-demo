import supabase from "@/plugins/supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export interface STORE_CHANNEL {
  sender: string;
  receiver: string;
  sender_name: string;
  sender_avatar: string;
  receiver_avatar: string;
  receiver_name: string;
}
const useChannelMutate = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const storeChannel = useMutation({
    mutationFn: async (payload: STORE_CHANNEL) =>
      await supabase.from("channel").insert(payload).single(),
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: ["channels"] });
    },
  });

  return {
    storeChannel,
  };
};

export default useChannelMutate;
