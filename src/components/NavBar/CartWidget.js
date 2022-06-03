import cart from "../../img/cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext} from "react";

//Componente icono Carrito de compras
const CartWidget = () => {
  const [addItem, removeItem, clear, isInCart, devuleveCantItems,items] = useContext(CartContext)


  


  return (
    <div  className='cart_widget_container'>
      <span  className="items">{devuleveCantItems()}</span>
      <Link  to="/cart">
        <img className="cart_widget" src={cart} alt="cart"></img>
      </Link>
    </div>
  );
};

export default CartWidget;

    