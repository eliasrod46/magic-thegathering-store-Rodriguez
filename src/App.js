//css
import "./App.css";
//import components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="body_container">
      <NavBar />
      <ItemListContainer greeting="Magic The Gathering - Wizard of the Coast" />
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default App;
