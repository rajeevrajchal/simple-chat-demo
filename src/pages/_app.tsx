import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import useAuth, { AuthProvider } from "@/hooks/use-auth";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: "always",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = useAuth();
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {loading ? <p>Loading</p> : <Component {...pageProps} />}
        </AuthProvider>
      </QueryClientProvider>
    </Theme>
  );
}
