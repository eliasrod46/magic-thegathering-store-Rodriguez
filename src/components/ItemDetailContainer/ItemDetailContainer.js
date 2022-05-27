//css
import styles from "./styles.module.css";
//import components
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getItem } from "../../productos";
import { useParams } from "react-router";
import Spiner from "../Spiner/Spiner";

//*Componente donde pido datos de producto y envio a item detail
const ItemDetailContainer = () => {
  //recibo el id que viene por url
  const { id } = useParams();
  //defino states 
  const [producto, setProducto] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //Simulo consula en bbdd
  useEffect(() => {
    setIsLoading(true)
    getItem(id).then((res) => {
      setProducto(res);
      setIsLoading(false)

    });
  }, []);

  return (
    isLoading?
      <div className={styles.spiner_container}>
        <Spiner/>
      </div>
    :
      <>
        <ItemDetail data={producto} />
      </>
  );
};

export default ItemDetailContainer;
