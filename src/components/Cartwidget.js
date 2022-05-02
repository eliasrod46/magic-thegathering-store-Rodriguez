import cart from "../img/cart.png";
import "./Cartwidget.css";

const CartWidget = () => {
  return (
    <div className="cart_widget--container">
      <a href="#">
        <img className="cart_widget" src={cart} alt="cart"></img>
      </a>
    </div>
  );
};

export default CartWidget;
