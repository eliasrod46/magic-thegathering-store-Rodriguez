import {createContext, useState} from 'react'

export const CartContext = createContext()

const productosAgregados = []

export const CartProvider = ({children}) => {


  const addItem = (id, item, price, pictureUrl, category, quantity) => {


    const newProduct = {
      id: id,
      title: item,
      price: price,
      pictureUrl: pictureUrl,
      category: category,
      quantity: quantity
    }

    const found = items.find(item => item.id == id);

    if(!found){
      productosAgregados.push(newProduct)
      setItems(productosAgregados)

      console.log(items)
    }else{
      console.log('El producto ya se encuentra en el carrito y no se puede volver a agregar')

      
    }
  }

  const removeItem = (itemId) => {

    let found = false
    
    items.forEach((item, index, arr) => {
      if(item.id == itemId){
        found = index
      }
    });

    if(found){
      const arrayNuevo = productosAgregados.splice(found, 1)
      setItems(arrayNuevo)
    }else{
      console.log("Producto no encontrado")
    }
    
  }

  const clear = () =>[
    setItems([]) 
  ]

  const isInCart = (id) =>{
    const found = items.find(item => item.id == id);

    if(found){
      return true
    }else{
      return false
    }
  } 


  const [items, setItems] = useState(productosAgregados)
  

  return(
    <CartContext.Provider value={[addItem, removeItem, clear, isInCart]}>
      {children}
    </CartContext.Provider>
  )

}


