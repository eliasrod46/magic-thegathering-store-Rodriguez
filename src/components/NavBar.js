import "./NavBar.css";
import logo from "../img/logo.png";

function NavBar() {
  return (
    <div>
      <nav className="NavBar">
        <div className="logo__container">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <ul className="list">
          <li className="list__item">
            <a className="list__link" href="#">
              Inicio
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="#">
              Cartas
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="#">
              Sobres
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="#">
              Pack de inicio
            </a>
          </li>
        </ul>
        <div className="user__buttons--container">
          <button className="button login">Login</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
