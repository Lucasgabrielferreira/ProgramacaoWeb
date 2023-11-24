import { Component } from "react";

const Botao = {
  margin: "10px",
  fontSize: "12px",
};

class Conteudo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      read: 0,
      like: 0,
      dislike: 0,
    };
  }

  handleRead = () => {
    this.setState((prevState) => ({
      read: prevState.read + 1,
    }));
  };

  handleLike = () => {
    this.setState((prevState) => ({
      like: prevState.like + 1,
    }));
  };

  handleDislike = () => {
    this.setState((prevState) => ({
      dislike: prevState.dislike + 1,
    }));
  };

  render() {
    const { read, like, dislike } = this.state;
    const estilo = {
      read: {
        color: "green",
      },
      like: {
        color: "blue",
      },
      dislike: {
        color: "red",
      },
    };

    return (
      <div>
        <article>
          <h2>Ferias</h2>
          <img
            src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <p>
            As férias de verão são um momento especial do ano em que muitas
            pessoas aproveitam para relaxar e se divertir. Uma das melhores
            maneiras de aproveitar o verão é viajar para a praia. A praia é um
            lugar mágico, onde o sol, a areia e o mar se encontram para criar um
            ambiente perfeito para relaxar e se divertir.
          </p>
          <p>
            Ao viajar para a praia, você pode desfrutar de muitas atividades
            diferentes. Você pode nadar no mar, tomar sol na praia, jogar vôlei
            de praia ou simplesmente relaxar e ler um livro. Além disso, a praia
            é um ótimo lugar para passar tempo com amigos e familiares. Você
            pode fazer um piquenique na praia, jogar jogos de tabuleiro ou
            simplesmente conversar e aproveitar a companhia um do outro.
          </p>
          <p>
            As férias de verão também são uma ótima oportunidade para
            experimentar novas coisas. Você pode experimentar novos alimentos,
            como frutos do mar frescos, ou experimentar novas atividades, como
            surfar ou andar de caiaque. Além disso, a praia é um ótimo lugar
            para explorar a natureza. Você pode caminhar pelas trilhas da praia,
            observar a vida marinha ou simplesmente apreciar a beleza natural ao
            seu redor.
          </p>
          <p>
            Em resumo, as férias de verão e viagem que se faz à praia no verão
            são uma ótima maneira de relaxar, se divertir e experimentar coisas
            novas. Se você ainda não planejou suas férias de verão, considere
            viajar para a praia e aproveitar tudo o que ela tem a oferecer!
          </p>
          <button
            style={{ ...Botao, ...(read ? estilo.read : {}) }}
            onClick={this.handleRead}
          >
            Lido ({read})
          </button>
          <button
            style={{ ...Botao, ...(like ? estilo.like : {}) }}
            onClick={this.handleLike}
          >
            Gostei ({like})
          </button>
          <button
            style={{ ...Botao, ...(dislike ? estilo.dislike : {}) }}
            onClick={this.handleDislike}
          >
            Não Gostei ({dislike})
          </button>
        </article>
      </div>
    );
  }
}

export default Conteudo;
