import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Maqueta de La Lista de items" />
      <ItemCount stock={1} initial={1} />
    </div>
  );
}

export default App;
