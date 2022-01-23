import { Outlet } from "react-router-dom";
import { Navigation, MyNavLink, Main, Footer, Wrapper } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Wrapper>
        <header>
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
        </header>
        <Main>
          <Outlet />
        </Main>
      </Wrapper>
      <Footer>
        Developed by Myronenko Nadiia <a href="tel:+380966873203"></a>&copy;
        January 2022
      </Footer>
    </>
    //Outlet point, where will be rest content
  );
};
