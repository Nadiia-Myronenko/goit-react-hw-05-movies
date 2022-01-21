import { Outlet } from "react-router-dom";
import { Navigation, MyNavLink } from "./HomePage.styled";

export const HomePage = () => {
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
    </>
  );
};
