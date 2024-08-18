import React, { useEffect, useState } from 'react';

function UsuarioList() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('/usuarios', {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error('Erro ao buscar usuários:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.nome} - {usuario.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsuarioList;
