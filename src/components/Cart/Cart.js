import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../../context/CartContext'
import CartItem from './CartItem'
import style from './styles.module.css'
import TextField from '@mui/material/TextField';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import MessageSuccess from '../MessageSuccess/MessageSuccess'

const initialState={
  nombre: '',
  telefono: '',
  email: ''
}

const Cart = props => {
  // context carrito de compras
  const [addItem, removeItem, clear, isInCart, devuleveCantItems,items] = useContext(CartContext)
  //estado bandera para mostrar pantalla sin items
  const [show,setShow] = useState(false)
  // estado para guardar el total a pagar
  const [total,settotal] = useState(0)
  //estado para guardar los datos del comprador
  const [datosUsuario, setDatosUsuario] = useState(initialState);
  //estado para guardar id de la compra realizada
  const [idCompra, setIdCompra] = useState('');
  

  useEffect(() => {
    //verifico que exista al menos 1 item
    if(items.length>0){
      setShow(true)
    }
    let partial = 0
    // recorro los items sumar el total a pagar 
    items.forEach(item => {
      partial = partial + (item.price*item.quantity)
    });
    // y lo guardo en el estado total
    settotal(partial)
  }, []);

  const handleOnChange = (e) => {
		const { value, name } = e.target;

		setDatosUsuario({ ...datosUsuario, [name]: value });
	};

  const Submit = async (e) => {
    e.preventDefault()
    const fecha = new Date().toLocaleString()


    const docRef = await addDoc(collection(db, 'compras'), {
			buyer:{name:datosUsuario.nombre, phone:datosUsuario.telefono, email:datosUsuario.email},
      items,
      total,
      fecha
		});
    console.log('ID de compra: ', docRef.id);
		setIdCompra(docRef.id);
		setDatosUsuario(initialState);
    clear()
  }

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
            <form onSubmit={Submit} className={style.form}>
              
              <TextField name='nombre' value={datosUsuario.nombre} onChange={handleOnChange} className={style.input} id="outlined-basic" label="Nombre" variant="outlined" required/>
              <TextField name='telefono' value={datosUsuario.telefono} onChange={handleOnChange} className={style.input} id="outlined-basic" label="telefono" variant="outlined" required/>
              <TextField name='email' value={datosUsuario.email} onChange={handleOnChange} className={style.input} id="outlined-basic" label="Email" variant="outlined" required/>
              <button className={style.button_form} >Terminar Mi Compra</button>  
            </form>

            <div className={style.total}>
              Total a pagar ${total}
            </div>
          </div>
			    {idCompra && <MessageSuccess idCompra={idCompra} />}

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