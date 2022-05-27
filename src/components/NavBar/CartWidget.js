import cart from "../../img/cart.png";
import style from "./styles.css";

//Componente icono Carrito de compras
const CartWidget = () => {
  return (
    <div className="cart_widget_container">
      <a href="#">
        <img className="cart_widget" src={cart} alt="cart"></img>
      </a>
    </div>
  );
};

export default CartWidget;
