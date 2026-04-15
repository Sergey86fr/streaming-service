import {  Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MOVIE_LISTS, TOP_LISTS } from "../features/navigation/model/top-lists";
import { Loader } from "../shared/ui";
import { ProtectedRoute } from "../shared/ui/protected-route/protected-route";
import { Layout } from "./layout";
import { AuthLayout } from "./auth-layout";
import { ActorPage } from "../pages/actor-page";
import { FavoritesPage } from "../pages/favorites-page";
import { LoginPage } from "../pages/login-page";
import { MainPage } from "../pages/main-page";
import { MediaPage } from "../pages/media-page";
import { MovieDetails } from "../pages/movie-details";
import { MoviesTopPage } from "../pages/movies-top-page";
import { NotFound } from "../pages/not-found";
import { RegisterPage } from "../pages/register-page";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "favorites",
          element: (
            <ProtectedRoute>
              <FavoritesPage />
            </ProtectedRoute>
          ),
        },

        ...TOP_LISTS.map((el) => ({
          path: el.url.startsWith("/") ? el.url.substring(1) : el.url,
          element: <MoviesTopPage />,
        })),
        ...MOVIE_LISTS.map((el) => ({
          path: el.url.startsWith("/") ? el.url.substring(1) : el.url,
          element: <MediaPage />,
        })),

        {
          path: "movie/:id",
          element: <MovieDetails />,
          errorElement: <h1>error...</h1>,
        },
        {
          path: "actor/:actorId",
          element: <ActorPage />,
        },
      ],
    },
    {
      path: "auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <Suspense
      fallback={
        <Loader />
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

