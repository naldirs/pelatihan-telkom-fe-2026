import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./app/QueryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
