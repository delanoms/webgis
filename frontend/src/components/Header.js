import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>WEBGIS</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="/home">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/usuarios">Usuários</a></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '10px 20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '15px'
  }
};

export default Header;
