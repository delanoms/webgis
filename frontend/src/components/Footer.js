import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 WEBGIS. Todos os direitos reservados.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%'
  }
};

export default Footer;
