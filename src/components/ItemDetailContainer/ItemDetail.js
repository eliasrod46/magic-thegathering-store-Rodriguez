import style from "./styles.module.css";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const [cantCompra, setCantCompra] = useState(0);

  const onAdd = (cant) => {
    setCantCompra(cant);
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
            <ItemCount stock={data.stock} compra={onAdd} />
          ) : (
            <h3 className={style.sendCart}>
              Articulo agregado al carrito({`${cantCompra} Articulo/s`})
            </h3>
          )}
          <div className={style.container_btn_buy}>
            <Link to="/cart" className={style.btn_buy}>
              Finalizar compra
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
