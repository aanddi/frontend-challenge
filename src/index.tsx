import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/screen/Home/Home";
import "./styles/global.scss";
import Favorites from "components/screen/Favorites/Favorites";

const queryClient = new QueryClient();

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/favorites",
      element: <Favorites />,
   },
]);

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <PrimeReactProvider>
            <RouterProvider router={router} />
         </PrimeReactProvider>
      </QueryClientProvider>
   </React.StrictMode>
);
