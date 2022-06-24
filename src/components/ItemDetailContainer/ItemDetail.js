//Css
import style from "./styles.module.css";
//Imports modules
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
//context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ data }) => {
  //defino states
  const [cantCompra, setCantCompra] = useState(0);
  const [addItem] = useContext(CartContext)

  //objeto de datos a enviar carrito de compras
  const sendAddItem = {
    id:data.id,
    title:data.title,
    price:data.price,
    imgpath:data.pictureUrl,
    category:data.category,
    quantity:cantCompra,
  }

  //funcion que se ejecuta al hacer click en afgregar al carrrito esta recibe la cantidad de articulos seleccionado 
  const onAdd = (cant) => {
    //guardo la cantidad a comprar en el state
    setCantCompra(cant);
    //Actualizo la propiedad qualtity del objeto ya que queda guardada con el state que el objeto tenia cuando se declaro
    sendAddItem.quantity = Number(cant)
    //llamo al metodo additem del context cartcontext
    addItem(sendAddItem)
  };


  
  

  return (
    <>
      <div className={style.detail_container}>
        <div className={style.detail_img}>
          <img src={data.pictureUrl} alt={data.title} />
        </div>
        <div className={style.detail_data}>
          <h2 className={style.title}>{data.title}</h2>
          <p className={style.description}>{data.description}</p>
          <div className={style.price}>Precio: ${data.price}</div>

          {cantCompra === 0 ? (
            // mando la funcion onAdd al contador para ejecutarla hacer hacer click en agregar al carrito
            <ItemCount stock={data.stock} compra={onAdd}/>
          ) : (
            <>
              <h3 className={style.sendCart}>
                Articulo agregado al carrito({`${cantCompra} Articulo/s`})
              </h3>
              <div className={style.container_btn_buy}>
                <Link to="/cart" className={style.btn_buy} >
                  Finalizar compra
                </Link>
              </div>
            </>
          )}
          
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
