import { Router } from "express"; // Importa o roteador do Express para criar rotas modulares

import { signup, login } from "./userService"; // Importa as funções de negócio (criar conta e logar) do Service

const AUTH_COOKIE_NAME = "authorization"; // Define o nome do cookie que guardará o token

const router = Router(); // Inicializa uma nova instância do roteador
router.post("/signup", (req, res) => {
  // Cria uma rota do tipo POST para '/signup' (cadastro)
  try {
    // Inicia o tratamento de erros
    const token = signup(req.body); // Chama a função de cadastro no Service enviando os dados recebidos no corpo da requisição (req.body). Recebe um token de volta
    res.cookie(AUTH_COOKIE_NAME, token).status(201).send(); // Cria um cookie na resposta contendo o token, define o status HTTP 201 (Criado) e envia a resposta vazia finalizando a chamada
  } catch (err) {
    // Captura erros jogados pelo Service
    if (err.message === "email_existente")
      // Verifica se o erro é especificamente sobre e-mail já existente
      return res.status(400).send(err.message); // Retorna status 400 (Bad Request) e a mensagem de erro para o cliente
    res.status(500).send(err.message); // Para outros erros, retorna 500 (Erro interno do servidor)
  }
});

router.post("/login", (req, res) => {
  // Cria uma rota do tipo POST para '/login'
  try {
    // Inicia o tratamento de erros
    const token = login(req.body); // Chama a função de login no Service enviando email e senha. Recebe o token de volta se der certo
    res.cookie(AUTH_COOKIE_NAME, token).status(200).send(); // Define o cookie com o token, seta o status 200 (OK) e finaliza a requisição
  } catch (err) {
    // Captura erros
    if (
      // Verifica múltiplas condições de erro conhecidas
      err.message === "email_nao_encontrado" || // Se o e-mail não existir
      err.message === "senha_incorreta" // Ou se a senha estiver errada
    )
      return res.status(400).send(err.message); // Retorna status 400 e a respectiva mensagem

    res.status(500).send(); // Para erros não mapeados, retorna 500
  }
});

export default router; // Exporta este roteador para ser usado lá no index.js
