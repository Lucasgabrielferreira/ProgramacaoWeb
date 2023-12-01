import React from 'react';

const estilo = {
  backgroundColor: '#f5f5f5',
  padding: '20px',
  color: '#666',
};

const Sobre = () => {
  return (
    <article style={estilo}>
      <h2 style={{ color: '#333' }}>Sobre React</h2>
      <p>
        React é uma biblioteca JavaScript para construir interfaces de usuário. Ela foi desenvolvida pelo Facebook e é usada em muitos projetos populares, como o Instagram e o WhatsApp.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta distinctio ducimus odio dignissimos voluptas ab accusamus modi, nam nobis fugiat consequuntur eius error porro ullam pariatur reiciendis, officiis eligendi?  
      </p>
    </article>
  );
};

export default Sobre;
