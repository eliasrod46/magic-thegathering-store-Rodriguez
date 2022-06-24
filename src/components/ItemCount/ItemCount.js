import s from "./styles.module.css";
import { useState } from "react";

//*Componente contador de stock
const Itemcount = ({ stock, compra }) => {
  const [cant, setCant] = useState(0);

  //*funcion boton suma cantidad a comprar
  const handleClickUp = () => {
    if (cant < stock) {
      setCant(cant + 1);
    }
  };

  //*funcion boton resta cantidad a comprar
  const handleClickDown = () => {
    if (cant > 0) {
      setCant(cant - 1);
    }
  };

  return (
    <div className={s.card_container}>
      <h3 className={s.card_container_title}>Stock Disponible: {stock}</h3>
      <div className={s.card_container_stock}>
        {stock === 0 ? "Articulo sin stock" : ""}
      </div>

      <div className={s.card_container_count}>
        <button
          disabled={cant <= 0 || stock === 0}
          className={s.count_down}
          onClick={handleClickDown}
        >
          -
        </button>

        <span className={s.count_data}>{cant}</span>

        <button
          disabled={cant >= stock}
          className={s.count_up}
          onClick={handleClickUp}
        >
          +
        </button>
      </div>
      <div className={s.card_container_send}>
        {/* boton que ejecuta la fucion onAdd */}
        <button
          onClick={() => compra(cant)}
          disabled={stock === 0 || cant === 0}
          className={s.card_send}
        >
          Agregar Al carrito
        </button>
      </div>
    </div>
  );
};

export default Itemcount;
