import { NavLink } from "react-router-dom";
import s from "./header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.wrapperNav}>
          <nav>
            <ul className={s.list}>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => (isActive ? s.active : s.link)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive }) => (isActive ? s.active : s.link)}
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
