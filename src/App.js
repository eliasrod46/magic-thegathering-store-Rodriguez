//css
import "./App.css";
//import components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Router>
      <div className="body_container">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Agregados recientemente" />}
          />

          <Route
            path="/category/:id"
            element={<ItemListContainer greeting="Articulos" />}
          />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route
            path="/cart"
            element={<h1>holis</h1>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
