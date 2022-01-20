import { Link, Outlet } from "react-router-dom";
import { Navigation } from "./HomePage.styled";

export const HomePage = () => {
  return (
    <>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Navigation>
      <Outlet />
    </>
  );
};
