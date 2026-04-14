import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../pages/Homepage";
import Timeline from "../pages/Timeline";
import ErrorElement from "./Errorelement";
import Stats from "../pages/Stats";
import Frienddetails from "../pages/Frienddetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats/>
      },
      {
        path: "/frienddetails/:id",
        element: <Frienddetails/>
      }
    ],
    errorElement: <ErrorElement/>
  },
]);
