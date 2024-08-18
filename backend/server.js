const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch(error => {
  console.error('Erro ao conectar ao banco de dados:', error);
});
