import { Component } from "react";
import ButtonStyle from "./ButtonStyle";

const Botao = {
    margin: "10Px",  
    fontSize: "12px",
  };

export class Conteudo extends Component {
  render() {
    return (
      <div>
        <article>
          <h2>Ferreira</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus maiores quae harum aperiam, commodi nesciunt, ratione aut est totam facilis et, aliquid maxime eius nemo nihil distinctio nobis? Suscipit, minima.</p>
          <button style={Botao} onClick={ButtonStyle}>Lido</button>
          <button style={Botao}>Gostei</button>
          <button style={Botao}>Não Gostei</button>
        </article>
      </div>
    );
  }
}

export default Conteudo;
