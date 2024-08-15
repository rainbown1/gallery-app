import './App.css';
import Imagen from './Componentes/Item.jsx';

function App() {

  const imagenes = [
    { id: Date.now() },
    { id: Date.now() },
    { id: Date.now() },
    { id: Date.now() },
    { id: Date.now() },
    { id: Date.now() },
    { id: Date.now() },
  ];
  return (
    <div className="App">
      <Imagen imagen={imagenes} />
    </div>
  );
}

export default App;
