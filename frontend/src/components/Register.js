import React, { useState } from 'react';

function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha })
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" required />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;
