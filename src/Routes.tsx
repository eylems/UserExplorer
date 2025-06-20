import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./root";
import HomePage from "./pages/HomePage";
import UserPage, { UsersLoader } from "./pages/UserPage";
import Favorites from "./pages/Favorites";
import UserDetailPage, { userDetailLoader } from "./pages/UserDetailPage";
import UserPostPage, { userPostLoader } from "./pages/UserPostPage";
import UserTodosPage, { userTodosLoader } from "./pages/UserTodosPage";
import UserAlbumPage, { userAlbumLoader } from "./pages/UserAlbumpage";
import PostDetailPage, { postLoader } from "./pages/PostDetailPAge";
import AlbumDetailPage, { userPhotosLoader } from "./pages/AlbumDetailPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/users",
        element: <UserPage />,
        loader: UsersLoader
      },
      {
        path: "/users/:id",
        element: <UserDetailPage />,
        loader: userDetailLoader,
        children: [
          {
            path: "posts",
            element: <UserPostPage />,
            loader: userPostLoader
          },
          {
            path: "albums",
            element: <UserAlbumPage />,
            loader: userAlbumLoader
          },
          {
            path: "todos",
            element: <UserTodosPage />,
            loader: userTodosLoader
          }
        ],
      },
      {
        path: "/users/:id/posts/:postId",
        element: <PostDetailPage />,
        loader: postLoader
      },
      {
        path: "users/:id/albums/:albumId",
        element: <AlbumDetailPage />,
        loader: userPhotosLoader
      },
      {
        path: "/favorites",
        element: <Favorites />
      }
    ]
  }
];



export const router = createBrowserRouter(routes)