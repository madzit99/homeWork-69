import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container w-50 justify-content-center">
          <NavLink to={"/"} className="navbar-brand">
            Сериалы
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
