import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Page from "./Page.jsx";
import "./styles/fonts.css";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Page />,
      },
    ],
    { basename: "/portfolio-site" }
  );
  return (
    <ChakraProvider value={defaultSystem}>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  );
}

export default App;
