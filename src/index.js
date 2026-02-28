import * as express from "express"; // Importa o framework Express para criar o servidor web
import * as cookieParser from "cookie-parser"; // Importa o middleware para lidar com cookies

const app = express(); // Inicializa uma instância do aplicativo Express
app.use(express.json()); // Configura a API para entender requisições cujo corpo (body) esteja em formato JSON
app.use(cookieParser()); // Configura a API para extrair e ler cookies das requisições recebidas

import userController from "./modules/user/userController"; // Importa as rotas relacionadas a usuários
import postController from "./modules/post/postController"; // Importa as rotas relacionadas a posts

app.use("/user", userController); // Diz ao Express: "Toda requisição que começar com '/user' deve ser tratada pelo userController"
app.use("/post", postController); // Diz ao Express: "Toda requisição que começar com '/post' deve ser tratada pelo postController"

app.listen(3000, () => {
  // Inicia o servidor na porta 3000
  console.log("Server is running on http://localhost:3000"); // Imprime uma mensagem no terminal quando o servidor estiver pronto
});
