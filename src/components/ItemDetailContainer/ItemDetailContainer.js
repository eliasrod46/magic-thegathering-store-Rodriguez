//css
import styles from "./styles.module.css";
//import components
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Spiner from "../Spiner/Spiner";
//Firebase
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

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

    const getAlbums = async () => {
      let docs;
      const q = query(collection(db,'productos'))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(doc => {
        if(doc.id === id){
          docs= {...doc.data(), id: doc.id}
        }
        
      });
      setProducto(docs)
      setIsLoading(false);

    }
    getAlbums()
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
