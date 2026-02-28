import { Router } from "express"; // Importa o roteador
import { verifyAccessToken } from "../../utils/auth"; // Importa o middleware de verificação do token

import { createPost, getPosts } from "./postService"; // Importa a lógica de negócios de posts

const router = Router(); // Instancia o roteador

router.post("/", verifyAccessToken, (req, res) => {
  // Cria rota POST na raiz ('/post'). O middleware 'verifyAccessToken' é injetado aqui. Ele roda ANTES da função principal para garantir que o usuário está autenticado
  try {
    // Inicia tratamento de erro
    const post = createPost(req.body, req.user); // Chama a criação do post passando os dados da requisição (body) e os dados do usuário logado (req.user, que foi injetado pelo middleware de autenticação)
    res.status(200).send(post); // Se sucesso, retorna o status 200 e o objeto do post criado
  } catch (err) {
    // Captura falhas
    res.status(500).send(err.message); // Retorna erro do servidor
  }
});

router.get("/:id?", verifyAccessToken, (req, res) => {
  // Cria uma rota GET ('/post' ou '/post/123'). O ':id?' indica que o parâmetro id na URL é opcional. Também é protegida pelo 'verifyAccessToken'
  try {
    // Inicia tratamento de erro
    const posts = getPosts(req.params.id); // Chama a busca de posts no Service, passando o ID (se vier na URL)
    res.status(200).send(posts); // Retorna o(s) post(s) encontrado(s) com sucesso
  } catch (err) {
    // Captura falhas
    if (err.message === "post_nao_existe")
      // Verifica erro de post não encontrado
      return res.status(400).send(err.message); // Retorna status 400

    res.status(500).send(err.message); // Outros erros retornam 500
  }
});

export default router; // Exporta o roteador de posts para ser usado no index.js
