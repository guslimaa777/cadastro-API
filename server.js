// server.js - Servidor API Express com Swagger

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const CadastroManager = require('./cadastro');
const swaggerDocument = require('./swagger.json');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Inicializar gerenciador de cadastros
const cadastroManager = new CadastroManager();

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    mensagem: 'API de Cadastro',
    versao: '1.0.0',
    documentacao: 'http://localhost:3000/api-docs'
  });
});

// ==================== ROTAS DE CADASTRO ====================

// GET - Obter todos os cadastros
app.get('/api/cadastros', (req, res) => {
  try {
    const cadastros = cadastroManager.obterTodos();
    res.json({
      sucesso: true,
      total: cadastros.length,
      dados: cadastros
    });
  } catch (erro) {
    res.status(400).json({ sucesso: false, erro: erro.message });
  }
});

// GET - Obter cadastro por ID
app.get('/api/cadastros/:id', (req, res) => {
  try {
    const cadastro = cadastroManager.obterPorId(req.params.id);
    res.json({
      sucesso: true,
      dados: cadastro
    });
  } catch (erro) {
    res.status(404).json({ sucesso: false, erro: erro.message });
  }
});

// POST - Criar novo cadastro
app.post('/api/cadastros', (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const novoRegistro = cadastroManager.criar(nome, email, telefone);
    res.status(201).json({
      sucesso: true,
      mensagem: 'Cadastro criado com sucesso',
      dados: novoRegistro
    });
  } catch (erro) {
    res.status(400).json({ sucesso: false, erro: erro.message });
  }
});

// PUT - Atualizar cadastro
app.put('/api/cadastros/:id', (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const cadastroAtualizado = cadastroManager.atualizar(
      req.params.id,
      nome,
      email,
      telefone
    );
    res.json({
      sucesso: true,
      mensagem: 'Cadastro atualizado com sucesso',
      dados: cadastroAtualizado
    });
  } catch (erro) {
    res.status(400).json({ sucesso: false, erro: erro.message });
  }
});

// DELETE - Deletar cadastro
app.delete('/api/cadastros/:id', (req, res) => {
  try {
    const deletado = cadastroManager.deletar(req.params.id);
    res.json({
      sucesso: true,
      mensagem: 'Cadastro deletado com sucesso',
      dados: deletado
    });
  } catch (erro) {
    res.status(404).json({ sucesso: false, erro: erro.message });
  }
});

// GET - Buscar por email
app.get('/api/cadastros/buscar/email/:email', (req, res) => {
  try {
    const resultados = cadastroManager.buscarPorEmail(req.params.email);
    res.json({
      sucesso: true,
      total: resultados.length,
      dados: resultados
    });
  } catch (erro) {
    res.status(400).json({ sucesso: false, erro: erro.message });
  }
});

// GET - Estatísticas
app.get('/api/stats', (req, res) => {
  res.json({
    totalCadastros: cadastroManager.obterTotal(),
    dataAcesso: new Date().toISOString()
  });
});

// Tratamento de erro 404
app.use((req, res) => {
  res.status(404).json({
    sucesso: false,
    erro: 'Rota não encontrada'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
  console.log(`📚 Documentação em http://localhost:${PORT}/api-docs`);
});

module.exports = app;
