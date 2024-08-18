import React from 'react';

function MainContent() {
  return (
    <main style={styles.main}>
      <h2>Bem-vindo à Plataforma WEBGIS</h2>
      <p>Explore as funcionalidades e descubra como a geoinformação pode ajudar você.</p>
      {/* Adicione mais conteúdo aqui conforme necessário */}
    </main>
  );
}

const styles = {
  main: {
    padding: '20px',
    marginBottom: '50px' // Para evitar sobreposição com o rodapé fixo
  }
};

export default MainContent;
