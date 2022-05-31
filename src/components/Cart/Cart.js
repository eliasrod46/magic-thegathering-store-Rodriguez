import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../../context/CartContext'
import CartItem from './CartItem'
import style from './styles.module.css'


const Cart = props => {

  const [addItem, removeItem, clear, isInCart, items] = useContext(CartContext)
  const [show,setShow] = useState(false)
  const [total,settotal] = useState(0)
  useEffect(() => {
    if(items.length>0){
      setShow(true)
    }
    let partial = 0
    items.forEach(item => {
      partial = partial + (item.price*item.quantity)
    });
    settotal(partial)
    
    
  }, []);

  

  return (
    <>
      {
      show?
        <>
          <h1 className={style.h1}>Carrito de compras</h1>
          <div className={style.itemsContainer}>
            <table className={style.table}>
              <thead>
                <tr className={style.tr}>
                  <th className={style.th}>Articulo</th>
                  <th className={style.th}>Cantidad</th>
                  <th className={style.th}>Precio por unidad</th>
                  <th className={style.th}>Precio Total</th>
                  <th className={style.th}>Eliminar del carito</th>
                </tr>
              </thead>
              <tbody>
                {items.map((value) => {
                return (
                  <CartItem key={value.id} data={value} />
                  );
                })}
              </tbody>
            </table>
            <div className={style.total}>
              Total a pagar ${total}
            </div>
          </div>
        </>
      :
        <>
          <h1 className={style.h1}>No hay Items agregados</h1>
          <div className={style.button_container}>

          <Link className={style.button} to="/">Ir a la pagina Principal</Link>
          </div>
          
        </>
      }
      
    </>
  )
}



export default Cart