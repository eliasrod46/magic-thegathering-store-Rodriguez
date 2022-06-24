import style from "./styles.module.css";


//*Componente donde hago la maquetacion con la info recibida de itemlist
const Item = ({ data }) => {
  return (
    <div className={style.card_container}>
      <h3 className={style.card_container_title}>{data.title}</h3>

      <div className={style.card_container_img}>
        <img className={style.card_img} src={data.pictureUrl} alt={data.title} />
      </div>

      <h3 className={style.card_container_title}>{`$${data.price}`}</h3>

      <div className={style.card_container_send}>
        <button className={style.card_send}>Ver detalle del producto</button>
      </div>
      <div className={style.card_container_stock}>
        {data.stock === 0
          ? "Articulo sin stock"
          : `Stock disponible: ${data.stock}`}
      </div>
    </div>
  );
};

export default Item;
