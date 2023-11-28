import './App.css';
import { Component } from 'react';
import BoasVindas from './Components/BoasVindas';
import Sobre from './Components/Sobre';


export class App extends Component {
  render() {
    return (
      <div className="App" >
        <BoasVindas nome= "Lucas Gabriel" />
        <Sobre />
      </div>
    );
  }
}

export default App;
