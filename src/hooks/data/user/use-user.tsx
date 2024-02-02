import supabase from "@/plugins/supabase";
import { useQuery } from "@tanstack/react-query";

const useUser = ({ user_id }: { user_id: string }) => {
  const getUser: any = useQuery({
    queryKey: ["user", user_id],
    queryFn: () =>
      supabase.from("users").select("*").eq("id", user_id).maybeSingle(),
    enabled: !!user_id,
  });

  return {
    loading: getUser.isLoading || getUser.isRefetching,
    users: getUser?.data?.data || [],
  };
};

export default useUser;
