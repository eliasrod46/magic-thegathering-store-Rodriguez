//css
import "./styles.css";
//import components
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


//Componente barra de navegacion
function NavBar() {

  return (
    <div>
      <nav className="NavBar">
        <Link className="Link" to="/">
          <div className="logo__container">
            <img src="/img/logo.png" className="logo" alt="logo" />
            <h3 className="title">Magic The Gathering</h3>
          </div>
        </Link>
        <ul className="list">
          <li className="list__item">
            <Link to="/" className="list__link">
              Ver Todos
            </Link>
          </li>
          <li className="list__item">
            <Link to="/category/cartas" className="list__link">
              Cartas
            </Link>
          </li>
          <li className="list__item">
            <Link to="/category/sobres" className="list__link">
              Sobres
            </Link>
          </li>
          <li className="list__item">
            <Link to="/category/pack" className="list__link">
              Pack's de inicio
            </Link>
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
