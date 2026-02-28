import { generateAccessToken } from "../../utils/auth"; // Importa a função utilitária que gera o token JWT

let users = []; // Cria um array em memória para simular um banco de dados de usuários

const getUserByEmail = (
  searchEmail, // Função auxiliar para buscar um usuário
) => users.find((obj) => obj.email === searchEmail); // Varre o array de usuários e retorna o objeto que tiver o email igual ao buscado

export const signup = (data) => {
  // Exporta a função de criar conta recebendo dados (email, senha)
  if (getUserByEmail(data.email)) throw new Error("email_existente"); // Verifica se já existe o email. Se sim, "joga" um erro que será capturado pelo Controller

  users.push(data); // Se não existir, adiciona o novo usuário ao "banco de dados" (array)

  return generateAccessToken({ email: data.email }); // Gera e retorna um token JWT contendo o e-mail do usuário recém-criado
};

export const login = (data) => {
  // Exporta a função de login
  const user = getUserByEmail(data.email); // Busca o usuário pelo e-mail fornecido
  if (!user) throw new Error("email_nao_encontrado"); // Se o usuário não for encontrado, joga um erro

  if (user.password !== data.password) throw new Error("senha_incorreta"); // Se encontrou, compara a senha salva com a senha enviada. Se for diferente, joga um erro
  return generateAccessToken({ email: data.email }); // Se e-mail e senha baterem, gera e retorna o token de acesso
};
