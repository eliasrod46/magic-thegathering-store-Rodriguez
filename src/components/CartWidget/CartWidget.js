import cart from "../../img/cart.png";
import style from "./styles.module.css";

/* VER REACT ICONS!!!!! */
const CartWidget = () => {
  return (
    <div className={style.cart_widget_container}>
      <a href="#">
        <img className={style.cart_widget} src={cart} alt="cart"></img>
      </a>
    </div>
  );
};

export default CartWidget;
