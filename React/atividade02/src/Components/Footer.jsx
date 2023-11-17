import { Component } from "react";

const estilo = {
    color: "black",
    border: "black solid 2px",
    backgroundColor: "#E6E6E6",
    fontSize: "12px",
  };

export class Footer extends Component {
  render() {
    return (
      <div>
        <p style={estilo}>Todos os direitos reservados a ©Lucas Gabriel</p>
      </div>
    );
  }
}

export default Footer;
