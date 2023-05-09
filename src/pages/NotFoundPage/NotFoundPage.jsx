import { NavLink } from "react-router-dom";
import s from "./notFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.text404}>404</h2>
      <p className={s.text}>Page not found</p>
      <p className={s.text}>
        Please go back to the
        <NavLink className={s.link} to="/">
          HOME PAGE
        </NavLink>
      </p>
    </div>
  );
};

export default NotFoundPage;
