import { Outlet } from "react-router-dom";
import { Navigation, MyNavLink } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Navigation>
        <MyNavLink
          to="/"
          className={({ isActive }) => (isActive ? " active" : "")}
        >
          Home
        </MyNavLink>
        <MyNavLink
          to="/movies"
          className={({ isActive }) => (isActive ? " active" : "")}
        >
          Movies
        </MyNavLink>
      </Navigation>
      <Outlet />
    </> //Outlet point, where will be rest content
  );
};
