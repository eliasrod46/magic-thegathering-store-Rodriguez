import styles from "./styles.module.css";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className={styles.itemList__container}>
      {items.map((value) => {
        return <Item key={value.id} data={value} />;
      })}
    </div>
  );
};

export default ItemList;
