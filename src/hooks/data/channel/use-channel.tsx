import supabase from "@/plugins/supabase";
import { CHANNEL } from "@/types/channel.type";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useChannel = () => {
  const router = useRouter();
  const getChannelInfo: any = useQuery({
    queryKey: ["channel", router.query.chat_id],
    queryFn: () => {
      if (router.query.chat_id) {
        return supabase
          .from("channel")
          .select("*, messages(*)")
          .eq("id", router.query.chat_id)
          .maybeSingle();
      } else {
        throw new Error("chat Id not found");
      }
    },
    enabled: !!router.query.chat_id,
  });

  return {
    loading: getChannelInfo.isLoading || getChannelInfo.isRefetching,
    channel: getChannelInfo?.data?.data || ({} as CHANNEL),
  };
};

export default useChannel;
