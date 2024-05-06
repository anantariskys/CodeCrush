import { BrowserRouter as Router, RouterProvider } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import About from "./pages/About";
import AddMaterial from "./pages/AddMaterial";
import Admin from "./pages/Admin";
import AllMateri from "./pages/AllMateri";
import DetailMateri from "./pages/DetailMateri";
import Evaluasi from "./pages/Evaluasi";
import Forum from "./pages/Forum";
import Home from "./pages/Home";
import MateriList from "./pages/MateriList";
import NotFound from "./pages/NotFound";

const createRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <Home />
      </PageLayout>
    ),
  },
  {
    path: "/materi",
    element: (
      <PageLayout>
        <AllMateri/>
      </PageLayout>
    ),
  },
  {
    path: "/evaluasi",
    element: (
      <PageLayout>
        <Evaluasi/>
      </PageLayout>
    ),
  },
  {
    path: "/forum",
    element: (
  
        <Forum/>
    ),
  },
  {
    path: "/about",
    element: (
      <PageLayout>
        <About/>
      </PageLayout>
    ),
  },
  {
    path: "/materi/:id",
    element: (
      <PageLayout>
        <DetailMateri/>
      </PageLayout>
    ),
  },
  {
    path: "/admin",
    element: (
        <AddMaterial/>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Route = () => {
  return <RouterProvider router={createRouter} />;
};

export default Route;
