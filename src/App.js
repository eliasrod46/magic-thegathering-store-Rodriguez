//css
import "./App.css";
//import components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Del from "./components/Del/Del";
//Providers
import {CartProvider} from "./context/CartContext"



function App() {


  return (
    <CartProvider>
      <Router>
        <div className="body_container">
          <NavBar />
          <Routes>

            {/* Ruta - raiz(Todos los articulos) */}
            <Route
              path="/"
              element={<ItemListContainer greeting="Agregados recientemente" />}
            />

            {/* Ruta - categorias(articulos de uan categoria) */}
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting="Articulos" />}
            />

            {/* Ruta - vista detalle */}
            <Route path="/item/:id" element={<ItemDetailContainer />} />

            {/* Ruta - carrito */}
            <Route
              path="/cart"
              element={<Cart/>}
            />

            {/* Ruta - articulo eliminado */}
            <Route
              path="/del"
              element={<Del/>}
            />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
