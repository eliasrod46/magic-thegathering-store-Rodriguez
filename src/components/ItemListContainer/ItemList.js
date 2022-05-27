import styles from "./styles.module.css";
import Item from "./Item";
import { Link } from "react-router-dom";

//*Recibo la respuesta de la bbdd hago un mapeo y envio la info a componente Item
const ItemList = ({ items }) => {
  return (
    <div className={styles.itemList__container}>
      {items.map((value) => {
        return (
          <Link key={value.id} className={styles.item} to={`/item/${value.id}`}>
            <Item data={value} />
          </Link>
        );
      })}
    </div>
  );
};

export default ItemList;
