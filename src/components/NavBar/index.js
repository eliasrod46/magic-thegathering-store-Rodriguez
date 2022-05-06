import "./styles.css";
import CartWidget from "../CartWidget";

function NavBar() {
  return (
    <div>
      <nav className="NavBar">
        <div className="logo__container">
          <img src="/img/logo.png" className="logo" alt="logo" />
          <h3>Magic The Gathering</h3>
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
          <CartWidget />
          <ButtonLogin />
        </div>
      </nav>
    </div>
  );
}

function ButtonLogin() {
  return <button className="button login">Login</button>;
}
export default NavBar;
