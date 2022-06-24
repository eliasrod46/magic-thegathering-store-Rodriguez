import React from 'react'
import { Link } from 'react-router-dom'
import style from "./styles.module.css"

//Pantalla de confirmacion de articulo eliminado
const Del = () => {
  return (
    <>
        <h1 className={style.h1}>Articulo eliminado</h1>
        <div className={style.button_container}>

        <Link className={style.button} to="/cart">Volver al Carrito</Link>
        </div>

    </>
  )
}

export default Del