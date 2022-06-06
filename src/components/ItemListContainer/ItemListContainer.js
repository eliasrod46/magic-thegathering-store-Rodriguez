//css
import styles from "./styles.module.css";
//import components
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Spiner from "../Spiner/Spiner";
//Firebase
import { collection, query, getDocs, where } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'


//Contenedor lista de productos
function ItemListContainer({ greeting }) {
  //States
  //*State de productos y control spinner
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //guardo parametro recibido por url
  const { id } = useParams();

  //consulto a la bbdd
  useEffect(() => {
    setIsLoading(true)
    const getAlbums = async () => {
      //Si viene id de categoria por paramentro
      if (id) {
        const q = query(collection(db,'productos'),where('category', "==", id))
        const docs = [];
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc => {
          docs.push({...doc.data(), id: doc.id})
        });
        setProductos(docs)
        setIsLoading(false);
      }
      //Si NO viene id de categoria por paramentro
      else{
        const q = query(collection(db,'productos'))
        const docs = [];
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc => {
          docs.push({...doc.data(), id: doc.id})
        });
        setProductos(docs)
        setIsLoading(false);
      }
      

    }
    getAlbums()
  }, [id]); //se va a ejecutar cada vez que cambie id(la categoria)

  return (
    isLoading ?
        <div className={styles.spiner_container}>
          <Spiner/>
        </div>
      :
        <>
          <div>
            <h1 className={styles.titulo}>{greeting}</h1>
            
            <ItemList items={productos} />
          </div>
        </> 
    
  );
}
export default ItemListContainer;
