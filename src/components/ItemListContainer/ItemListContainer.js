//css
import styles from "./styles.module.css";
//import components
import ItemList from "../ItemList/ItemList";
import items from "../../productos";
import { useState, useEffect } from "react";

function ItemListContainer({ greeting }) {
  //defino state productos
  const [productos, setProductos] = useState([]);

    //Simulo demora en consula de bbdd
    useEffect(() => {
      setTimeout(() => {
      //promesa que va a devolver el array de items
      const data = new Promise((res, rej) => {
        res(items);
      });

      data
        .then((data) => {
          //guardo la respuesta de la promesa en el state product
          setProductos(data);
        })
        .catch((err) => {
          //manejo de errores
          console.log({ "error: ": err });
        });
      }, 2000);
    }, []); //se va a ejecutar una sola vez


  return (
    <div>
      <h1 className={styles.titulo}>{greeting}</h1>

      <ItemList items={productos} />
    </div>
  );
}
export default ItemListContainer;
