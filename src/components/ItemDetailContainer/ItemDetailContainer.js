//import components
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getItem } from "../../productos";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  //recibo el id que viene por url
  const { id } = useParams();
  //defino state item
  const [producto, setProducto] = useState({});

  useEffect(() => {
    getItem(id).then((res) => {
      setProducto(res);
    });
  }, []);

  return (
    <>
      <ItemDetail data={producto} />
    </>
  );
};

export default ItemDetailContainer;
