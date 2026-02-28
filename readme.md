# Passos para rodar o projeto:

- Instalar todas as dependências com `npm i`
- Instalar o webpack globalmente com `npm i -g webpack@5.68.0`
- Rodar localmente usando `npm run dev`

npm init -y
git init
npm install express@4.17.2
npm i jsonwebtoken@8.5.1 cookie-parser@1.4.6
git branch -M main
git push origin main

npm i webpack@5.68.0 webpack-cli@4.9.2 nodemon-webpack-plugin@4.7.0 webpack-node-externals@3.0.0 -save-dev

rodar = npm install -g webpack@5.68.0

npm run dev

package.json: É o "coração" da configuração do projeto Node.js. Ele lista as dependências (pacotes de terceiros como express e jsonwebtoken) e os scripts para rodar o projeto.

{

- "name": "nodepost", // Nome do projeto
- "version": "1.0.0", // Versão atual do projeto
- "main": "index.js", // Arquivo principal que o Node.js tentará executar por padrão
- "scripts": { // Atalhos de comandos de terminal
- "dev": "webpack --watch" // Comando 'npm run dev' que inicia o webpack para compilar o código em tempo real
  },
- "keywords": [], // Palavras-chave para buscas (vazio aqui)
- "author": "", // Autor do projeto
- "license": "ISC", // Tipo de licença de uso do código
- "description": "", // Descrição do projeto
- "dependencies": { // Pacotes essenciais para a API funcionar em produção
- "cookie-parser": "^1.4.6", // Middleware para ler cookies recebidos nas requisições HTTP
- "express": "^4.17.2", // Framework principal para criar a API e gerenciar rotas
- "jsonwebtoken": "^8.5.1" // Biblioteca para gerar e validar tokens de autenticação (JWT)
  },
- "devDependencies": { // Pacotes usados apenas no ambiente de desenvolvimento
  "- nodemon-webpack-plugin": "^4.7.0", // Plugin para reiniciar o servidor automaticamente ao salvar o código
  "- webpack": "^5.68.0", // Empacotador de módulos JavaScript
- "webpack-cli": "^4.9.2", // Interface de linha de comando para o Webpack
- "webpack-node-externals": "^3.0.0" // Utilitário para não empacotar dependências do node_modules no Webpack
  }
  }
