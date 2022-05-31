import React, {useContext} from 'react'
import style from './styles.module.css'
import {CartContext} from '../../context/CartContext'
import {Link} from 'react-router-dom'



const CartItem = ({data}) => {
  const [addItem, removeItem, clear, isInCart, items] = useContext(CartContext)
  return (
    <tr className={style.tr}>
      <td className={style.td}>{data.title}</td>
      <td className={style.td}>{data.quantity}</td>
      <td className={style.td}>$ {data.price}</td>
      <td className={style.td}>$ {data.price * data.quantity}</td>
      <td className={style.td}>
        <Link to="/del">
          <button className={style.button_del} onClick={() =>removeItem(data.id)}>
            Eliminar
          </button>
        </Link>
      </td>
    </tr>
  )
}



export default CartItem