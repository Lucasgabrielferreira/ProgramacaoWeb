import "./App.css";
import { Component } from "react";
import Conteudo from "./Components/Conteudo";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Conteudo />
        <Footer />
      </div>
    );
  }
}

export default App;
