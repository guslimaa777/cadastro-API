# API de Cadastro

API RESTful para gerenciar cadastros de pessoas com documentação Swagger e suporte a CRUD completo.

## 🚀 Instalação

```bash
npm install
```

## ▶️ Executar

```bash
npm start
```

A API estará disponível em: `http://localhost:3000`

## 📚 Documentação

Swagger UI: `http://localhost:3000/api-docs`

## 📋 Endpoints

### Cadastros

- **GET** `/api/cadastros` - Obter todos os cadastros
- **GET** `/api/cadastros/:id` - Obter cadastro por ID
- **GET** `/api/cadastros/buscar/email/:email` - Buscar por email
- **POST** `/api/cadastros` - Criar novo cadastro
- **PUT** `/api/cadastros/:id` - Atualizar cadastro
- **DELETE** `/api/cadastros/:id` - Deletar cadastro

### Estatísticas

- **GET** `/api/stats` - Obter estatísticas

## 💻 Exemplo de Uso

### Criar Cadastro
```bash
curl -X POST http://localhost:3000/api/cadastros \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Silva","email":"joao@example.com","telefone":"(11)98765-4321"}'
```

### Obter Todos
```bash
curl http://localhost:3000/api/cadastros
```

### Atualizar Cadastro
```bash
curl -X PUT http://localhost:3000/api/cadastros/1 \
  -H "Content-Type: application/json" \
  -d '{"nome":"João da Silva","email":"joao.silva@example.com"}'
```

### Deletar Cadastro
```bash
curl -X DELETE http://localhost:3000/api/cadastros/1
```

## 📁 Estrutura do Projeto

```
.
├── server.js          # Servidor Express
├── cadastro.js        # Lógica de cadastro
├── swagger.json       # Documentação OpenAPI
├── package.json       # Dependências
├── README.md          # Este arquivo
└── .gitignore         # Arquivos ignorados pelo Git
```

## 🛠️ Dependências

- `express` - Framework web
- `body-parser` - Parser de requisições
- `swagger-ui-express` - UI do Swagger
- `cors` - Suporte a CORS

## 📝 Notas

- Os dados são armazenados em memória (não persiste entre reinicializações)
- Para dados persistentes, adicionar um banco de dados como MongoDB ou PostgreSQL

## ✅ Git

```bash
git init
git add .
git commit -m "Inicial: API de Cadastro com Swagger"
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git push -u origin main
```
