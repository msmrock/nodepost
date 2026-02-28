import { sign, verify } from "jsonwebtoken"; // Importa as funções de assinar (criar) e verificar (validar) tokens da biblioteca JWT

const AUTH_SECRET = "secret"; // Define uma chave secreta usada para criptografar os tokens (em produção, isso deve ficar em variáveis de ambiente)

export const generateAccessToken = (data) => sign(data, AUTH_SECRET); // Função exportada que recebe dados (ex: email) e gera um token JWT usando a chave secreta

export const verifyAccessToken = (req, res, next) => {
  // Middleware exportado para proteger rotas. Recebe a requisição (req), resposta (res) e a função de continuar (next)
  try {
    // Inicia um bloco para tentar executar o código e capturar erros
    const { authorization } = req.cookies; // Tenta extrair um cookie chamado 'authorization' de dentro da requisição
    if (!authorization) throw new Error("authorization_not_found"); // Se o cookie não existir, lança um erro parando a execução

    const user = verify(authorization, AUTH_SECRET); // Verifica se o token recebido no cookie é válido usando a chave secreta. Se for, decodifica os dados do usuário
    req.user = user; // Salva os dados do usuário decodificados dentro do objeto da requisição (req), para que as próximas funções possam saber quem fez a requisição
    next(); // Chama a próxima função na fila da rota (permite que a requisição prossiga)
  } catch (err) {
    // Se qualquer erro acontecer no bloco try (token inválido, sem token, etc)
    res.statu(201).send(); // Aqui parece haver um pequeno erro de digitação no código original ('statu' ao invés de 'status') e o código 201 não é adequado para erros. O ideal seria res.status(401).send("Não autorizado");
  }
};
