import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import s from "./main.module.css";
import { Loader } from "../Loader/Loader";

const Main = () => {
  return (
    <main className={s.main}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Main;
