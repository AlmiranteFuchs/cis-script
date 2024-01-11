const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
