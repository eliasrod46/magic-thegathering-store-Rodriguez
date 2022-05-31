import cart from "../../img/cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext, useState, useEffect} from "react";

//Componente icono Carrito de compras
const CartWidget = () => {
  const [addItem, removeItem, clear, isInCart, items] = useContext(CartContext)
  const [cantItems, setCantItems] = useState(0)
  useEffect(() => {

    setCantItems(items.length)

  }, [items.length])
  
  const prueba = () =>{
    console.log(items)
  }

  return (
    <div  onLoad={prueba} className="cart_widget_container">
      <span className="items">{items.length}</span>
      <span className="items">{cantItems}</span>
      <Link to="/cart">
        <img className="cart_widget" src={cart} alt="cart"></img>
      </Link>
    </div>
  );
};

export default CartWidget;
