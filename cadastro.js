// cadastro.js - Sistema de Cadastro em Memória

class CadastroManager {
  constructor() {
    this.cadastros = [];
    this.nextId = 1;
  }

  // Criar novo cadastro
  criar(nome, email, telefone) {
    if (!nome || !email) {
      throw new Error('Nome e email são obrigatórios');
    }
    
    const novoRegistro = {
      id: this.nextId++,
      nome,
      email,
      telefone,
      dataCriacao: new Date().toISOString()
    };
    
    this.cadastros.push(novoRegistro);
    return novoRegistro;
  }

  // Obter todos os cadastros
  obterTodos() {
    return this.cadastros;
  }

  // Obter cadastro por ID
  obterPorId(id) {
    const cadastro = this.cadastros.find(c => c.id === parseInt(id));
    if (!cadastro) {
      throw new Error(`Cadastro com ID ${id} não encontrado`);
    }
    return cadastro;
  }

  // Atualizar cadastro
  atualizar(id, nome, email, telefone) {
    const cadastro = this.obterPorId(id);
    
    if (nome) cadastro.nome = nome;
    if (email) cadastro.email = email;
    if (telefone) cadastro.telefone = telefone;
    cadastro.dataAtualizacao = new Date().toISOString();
    
    return cadastro;
  }

  // Deletar cadastro
  deletar(id) {
    const index = this.cadastros.findIndex(c => c.id === parseInt(id));
    if (index === -1) {
      throw new Error(`Cadastro com ID ${id} não encontrado`);
    }
    
    const deletado = this.cadastros.splice(index, 1);
    return deletado[0];
  }

  // Buscar por email
  buscarPorEmail(email) {
    return this.cadastros.filter(c => 
      c.email.toLowerCase().includes(email.toLowerCase())
    );
  }

  // Total de cadastros
  obterTotal() {
    return this.cadastros.length;
  }
}

module.exports = CadastroManager;
