//css
import styles from "./styles.module.css";
//import components
import ItemList from "./ItemList";
import { getItems } from "../../productos";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Spiner from "../Spiner/Spiner";

function ItemListContainer({ greeting }) {
  //defino states
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //guardo parametro recibido por url
  const { id } = useParams();
  //Simulo demora en consula de bbdd
  useEffect(() => {
    getItems(id).then((res) => {
      setProductos(res);
    });
    setIsLoading(false);
  }, [id]); //se va a ejecutar cada vez que cambie id(la categoria)

  return (
    <div>
      <h1 className={styles.titulo}>{greeting}</h1>
      <ItemList items={productos} />
    </div>
  );
}
export default ItemListContainer;
