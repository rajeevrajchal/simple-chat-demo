import supabase from "@/plugins/supabase";
import { useMutation } from "@tanstack/react-query";

export interface USER_INPUT {
  auth_user_id: string;
  name: string;
  email: string;
  picture: string;
}

const useUserMutate = () => {
  const createUser = useMutation({
    mutationFn: async (payload: USER_INPUT) =>
      await supabase.from("users").insert(payload).single(),
  });

  return {
    createUser,
  };
};

export default useUserMutate;
