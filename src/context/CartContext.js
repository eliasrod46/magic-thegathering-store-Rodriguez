import {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  //States
  const [items, setItems] = useState([])

  //functions

  //*Agregar producto
  const addItem = (data) => {
    let found = undefined


    //*Armo objeto con los datos recibidos
    const newProduct = {
      id: data.id,
      title: data.title,
      price: data.price,
      pictureUrl: data.imgpath,
      category: data.category,
      quantity: Number(data.quantity)
    }

    //Busco si el articulo ya esta agregado
    items.forEach((item,index)=>{
      if(item.id == data.id){
        found = index
      }
    })
    

    //Verifico si existe el producto para agregarlo al estado o modificarlo
    if(found == undefined){
      items.push(newProduct)
      setItems(items)
      console.log('El producto fue agregado')
      console.log(items)
    }else{
      items[found].quantity += Number(data.quantity)
      setItems(items)
      console.log('El producto fue modificado')
      console.log(items)
    }
  }

  //*Elimino producto
  const removeItem = (itemId) => {

    let found = false
    
    items.forEach((item, index, arr) => {
      if(item.id == itemId){
        found = index
      }
    });

    if(found){
      items.splice(found, 1)
      setItems(items)
    }else{
      console.log("Producto no encontrado")
    }
    
  }

  //*Elimino todo los elementos del carrito
  const clear = () =>[
    setItems([]) 
  ]

  //*Consulto por la existencia de un producto en el carrito
  const isInCart = (id) =>{
    const found = items.find(item => item.id == id);

    if(found){
      return true
    }else{
      return false
    }
  } 

  return(
    <CartContext.Provider value={[addItem, removeItem, clear, isInCart]}>
      {children}
    </CartContext.Provider>
  )

}


