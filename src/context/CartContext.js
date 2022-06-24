import {createContext, useState} from 'react'


//contexto donde guardo la info del carrito de compras
export const CartContext = createContext()

  export const CartProvider = ({children}) => {
  //States
  const [items, setItems] = useState([])

  //functions
 
  //*Agregar producto
  const addItem = (data) => {
    let found = -1


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
      if(Number(item.id) === Number(data.id)){
        found = index
      }
    })
    

    //Verifico si existe el producto para agregarlo al estado o modificarlo
    if(found === -1){
      items.push(newProduct)
      setItems([...items])
      console.log('El producto fue agregado')
    }else{
      items[found].quantity += Number(data.quantity)
      setItems([...items])
      console.log('El producto fue modificado')
    }
  }

  //*Elimino producto
  const removeItem = (itemId) => {
   
    let found = -1


    
    items.forEach((item, index) => {
      if(item.id === itemId){
        found = index
      }
    });


    
    if(found !== -1){
      items.splice(found, 1)
      setItems([...items])
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
    const found = items.find(item => Number(item.id) === Number(id));

    if(found){
      return true
    }else{
      return false
    }
  } 

  //*Consulto por la existencia de un producto en el carrito
  const devuleveCantItems = () =>{
    const cantProd = items.reduce(
      (total, item) => (total = total + item.quantity),
      0
    );
    return cantProd;
  } 

  return(
    <CartContext.Provider value={[addItem, removeItem, clear, isInCart, devuleveCantItems,items]}>
      {children}
    </CartContext.Provider>
  )

}


