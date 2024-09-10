import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import LandingPage from "../LandingPage";
import Item1 from "../items/Item1";
import Item2 from "../items/Item2";
import Item3 from "../items/Item3";
import Item4 from "../items/Item4";
import Item5 from "../items/Item5";
import Item6 from "../items/Item6";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Item1 />
      },
      {
        path: "/home/item2",
        element: <Item2 />
      },
      {
        path: "/home/item3",
        element: <Item3 />
      },
      {
        path: "/home/item4",
        element: <Item4 />
      },
      {
        path: "/home/item5",
        element: <Item5 />
      },
      {
        path: "/home/item6",
        element: <Item6 />
      },

    ]
  }
])



