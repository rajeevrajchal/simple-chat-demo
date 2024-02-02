"use client";
import supabase from "@/plugins/supabase";
import { SESSION } from "@/types/session.type";
import { USER } from "@/types/user.model";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useUserMutate from "./data/user/use-user-mutate";

interface AuthProps {
  isLoggedIn: boolean;
  loginUser: USER | null;
  session: SESSION | null;
  loading: boolean;

  loginGoogle: {
    mutate: () => void;
    isPending: boolean;
  };
}

const authContext = createContext<AuthProps>({} as AuthProps);
const { Provider } = authContext;

const useAuthData = () => {
  const router = useRouter();
  const { createUser } = useUserMutate();

  const [path, setPath] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [session, setSession] = useState<SESSION | null>(null);

  const loginGoogle = useMutation({
    mutationFn: () =>
      supabase.auth.signInWithOAuth({
        provider: "google",
      }),
  });

  const checkAuthentication = async () => {
    setLoading(true);
    setPath((router.query.chat_id as string) || "/");
    await supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        setSession(session as unknown as SESSION);
        const { data } = await supabase
          .from("users")
          .select("*")
          .eq("auth_user_id", session.user.id)
          .maybeSingle();
        if (!data) {
          createUser.mutate({
            auth_user_id: session.user.id,
            name: session.user.user_metadata.name,
            email: session.user.user_metadata.email,
            picture:
              session.user.user_metadata.picture ||
              session.user.user_metadata.avatar_url,
          });
        }
        router.push(path ? `/?chat_id=${path}` : "/");
      } else {
        setSession(null);
        router.push("/login");
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return {
    loginGoogle,
    loginUser: session?.user || null,
    session,
    isLoggedIn: !!session,
    loading,
  };
};

export function AuthProvider({ children }: { children: ReactElement }) {
  const data = useAuthData();
  return <Provider value={data}>{children}</Provider>;
}

const useAuth = () => useContext(authContext);

export default useAuth;
