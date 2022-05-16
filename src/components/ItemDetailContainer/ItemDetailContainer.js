//css
import styles from "./styles.module.css";
//import components
import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {

  //Item de ejemplo
  const dato = {
    id: 5,
    title: "Bosque",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa reiciendis velit eum, similique unde dolorum tempore, provident alias id, corporis consectetur nihil deleniti doloribus? Ducimus asperiores laudantium neque recusandae harum.",
    price: 200,
    pictureUrl: "/img/productos/mana_llanura.jpg",
    stock: 50,
  }

  //defino state productos
  const [item, setItem] = useState([]);

  const getItem = ()=>{
    return new Promise((resolve, reject) => {
      //Tarea sincronica
      setTimeout(() => {
        resolve(dato);
      }, 2000);
    });
    
  }

  useEffect(()=>{
    getItem()
    .then((res)=>{
      setItem(res) 
    })
  },[])



  return <>
    <ItemDetail data={item}/>
  </>;
};

export default ItemDetailContainer;
