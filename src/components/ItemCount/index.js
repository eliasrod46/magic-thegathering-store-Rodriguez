import s from "./styles.module.css";
import { useState } from "react";

const Itemcount = ({ stock, initial }) => {
  const [cant, setCant] = useState(initial);

  const handleClickUp = () => {
    if (cant < stock) {
      setCant(cant + 1);
    }
  };

  const handleClickDown = () => {
    if (cant > 0) {
      setCant(cant - 1);
    }
  };

  return (
    <div className={s.card_container}>
      <h3 className={s.card_container_title}>Tierra Basica - Llanura</h3>
      <div className={s.card_container_stock}>
        {stock == 0 ? "Articulo sin stock" : ""}
      </div>

      <div className={s.card_container_img}>
        <img
          className={s.card_img}
          src="/img/productos/mana_llanura.jpg"
          alt="tierra llanura"
        />
      </div>

      <p className={s.card_container_desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
        fuga!
      </p>

      <div className={s.card_container_count}>
        <button
          disabled={stock == 0 ? "disable" : ""}
          className={s.count_down}
          onClick={handleClickDown}
        >
          -
        </button>
        <span className={s.count_data}>{cant}</span>

        <button
          disabled={stock == 0 ? "disable" : ""}
          className={s.count_up}
          onClick={handleClickUp}
        >
          +
        </button>
      </div>
      <div className={s.card_container_send}>
        <button disabled={stock == 0 ? "disable" : ""} className={s.card_send}>
          Agregar Al carrito
        </button>
      </div>
    </div>
  );
};

export default Itemcount;
