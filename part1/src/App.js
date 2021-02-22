import './App.css';
import Mensaje from './Mensaje.js'

const Descripcion = () =>{
  return <p>Primeros componentes de React</p>
}

const App = () =>{
  return (
    <div className="App">
      <Mensaje color ="red" message= "Bootcamp JavaScript"/>
      <Mensaje message= "Segunda sesión"/>
      <Descripcion />
    </div>
  );



}

export default App;
