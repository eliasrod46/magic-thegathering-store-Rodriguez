import style from "./styles.module.css";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ data }) => {

  return (
    <>
      <div className={style.detail_container}>
        <div className={style.detail_img}>
          <img src={data.pictureUrl} />
        </div>
        <div className={style.detail_data}>
          <h2 className={style.title}>{data.title}</h2>
          <p className={style.description}>{data.description}</p>
          <div className={style.price}>Precio: ${data.price}</div>
          <ItemCount stock={data.stock} initial={1} />

        </div>
      </div>
    </>
  );
};

export default ItemDetail;
