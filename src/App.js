import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer name="Daniel"/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
