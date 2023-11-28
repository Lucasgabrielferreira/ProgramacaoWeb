import React from 'react';
import PropTypes from 'prop-types';

const BoasVindas = ({ nome }) => {
  return (
    <section style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <h1 style={{ color: '#333' }}>Bem-vindo(a), {nome}!</h1>
      <p style={{ color: '#333' }}>Este é um componente de boas-vindas.</p>
    </section>
  );
};

BoasVindas.defaultProps = {
  nome: 'visitante',
};

BoasVindas.propTypes = {
  nome: PropTypes.string,
};

export default BoasVindas;
