//css
import styles from "./styles.module.css";
//import components
import ItemList from "./ItemList";
import { getItems } from "../../productos";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function ItemListContainer({ greeting }) {
  //defino state productos
  const [productos, setProductos] = useState([]);
  //guardo parametro recibido por url
  const { id } = useParams();
  //Simulo demora en consula de bbdd
  useEffect(() => {
    getItems(id).then((res) => {
      setProductos(res);
    });
  }, [id]); //se va a ejecutar una sola vez

  return (
    <div>
      <h1 className={styles.titulo}>{greeting}</h1>

      <ItemList items={productos} />
    </div>
  );
}
export default ItemListContainer;
