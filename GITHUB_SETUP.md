# 🚀 Guia de Conexão com GitHub

## 1️⃣ Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **"New"** para criar um novo repositório
3. Preencha os detalhes:
   - **Repository name**: `cadastro-api`
   - **Description**: API RESTful de Cadastro com Swagger
   - **Visibility**: Public (ou Private)
   - Não marque "Add README" (já temos um)

4. Clique em **"Create repository"**

## 2️⃣ Conectar ao Repositório Remoto

Após criar o repositório, execute no terminal:

```bash
# Adicionar remote origin
git remote add origin https://github.com/seu-usuario/cadastro-api.git

# Verificar se foi adicionado
git remote -v

# Fazer push da branch main para GitHub
git branch -M main
git push -u origin main
```

**Substitua `seu-usuario` pelo seu usuário do GitHub!**

## 3️⃣ Depois de Fazer Mudanças

Sempre que fizer mudanças, siga o ciclo:

```bash
# Ver status
git status

# Adicionar mudanças
git add .

# Fazer commit com mensagem descritiva
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push origin main
```

## 📋 Commits Já Realizados

✅ `9eed2b8` - Inicial: API de Cadastro com Swagger  
✅ `a5159bd` - Adicionar interface web de teste para API

## 🔗 Verificar Conexão

Depois de fazer push, você pode ver seu código em:
```
https://github.com/seu-usuario/cadastro-api
```

## 💡 Dicas

- Use `.gitignore` para excluir `node_modules/` (já configurado)
- Faça commits frequentes com mensagens claras
- Use branches para novos recursos: `git checkout -b feature/nova-feature`
- Crie Pull Requests para revisar código antes de mergear

## 📞 Problemas Comuns

**"remote already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/seu-usuario/cadastro-api.git
```

**Autenticação SSH ou HTTPS**
- Para HTTPS: use seu token de acesso como senha
- Para SSH: gere uma chave SSH e configure no GitHub

---
**Desenvolvido em: 8 de maio de 2026**
