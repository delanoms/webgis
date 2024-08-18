const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

exports.register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const senhaHash = await bcrypt.hash(senha, 10);
    const usuario = await Usuario.create({ nome, email, senha: senhaHash });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });

    const isMatch = await bcrypt.compare(senha, usuario.senha);
    if (!isMatch) return res.status(401).json({ error: 'Senha incorreta' });

    const token = jwt.sign({ id: usuario.id }, 'seuSegredoJWT', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
};
