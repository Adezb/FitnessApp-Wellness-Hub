import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const ExerciseDetail = lazy(() => import("../pages/ExerciseDetail"));
const Error404 = lazy(() => import("../pages/Error404"));

export const routes = {
  Home: "/",
  ExerciseDetail: "/exercise/:id",
};

const BaseRoutes = () => {
  return (
    <Routes>
      <Route path={routes.Home} exact element={<Home />} />
      <Route path={routes.ExerciseDetail} element={<ExerciseDetail />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default BaseRoutes;
