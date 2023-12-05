import { css } from "@emotion/css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";

//従来
// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "next", element: <Next /> },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "next", element: <Next /> },
    ],
  },
]);

//ScrollRestorationコンポーネント
function Root() {
  return (
    <>
      <ScrollRestoration /> 
      <Outlet />
    </>
  );
}


function Home() {//ファイル分けしてないから波線
  return (
    <div
      className={css`
        height: 200vh;
        width: 100vw;
        padding-bottom: 200px;
        background: linear-gradient(
          blue,
          pink
        ); 
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: auto;
      `}
    >
      <h1>Home</h1>
      <Link to={"/next"}>Click to Next page.</Link>
    </div>
  );
}

function Next() {//ファイル分けしてないから波線
  return (
    <div
      className={css`
        height: 200vh;
        width: 100vw;
        padding-bottom: 200px;
        background: linear-gradient(
        blue,
        green
        );
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        overflow: auto;
      `}
    >
      <h1>Next</h1>
      <Link to={"/"}>Click to Home page.</Link>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);