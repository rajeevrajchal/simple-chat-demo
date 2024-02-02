import supabase from "@/plugins/supabase";
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const getUsers: any = useQuery({
    queryKey: ["users"],
    queryFn: () => supabase.from("users").select("*"),
  });

  return {
    loading: getUsers.isLoading || getUsers.isRefetching,
    users: getUsers?.data?.data || [],
  };
};

export default useUsers;
