import supabase from "@/plugins/supabase";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useChannels = () => {
  const getChannels: any = useQuery({
    queryKey: ["channels"],
    queryFn: () => supabase.from("channel").select("*, messages(*)"),
  });

  return {
    loading: getChannels.isLoading || getChannels.isRefetching,
    channels: getChannels?.data?.data || [],
  };
};

export default useChannels;
