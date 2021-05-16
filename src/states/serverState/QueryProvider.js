import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const QueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

// prepares the react query to be wrapped around our top level component