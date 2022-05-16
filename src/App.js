//css
import "./App.css";
//import components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="body_container">
      <NavBar />
      {/* <ItemListContainer greeting="Magic The Gathering - Wizard of the Coast" />
      <ItemCount stock={5} initial={1} /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
