let posts = []; // Cria um array em memória para simular uma tabela de posts no banco de dados

export const createPost = (data, user) => {
  // Exporta função para criar post, recebendo o conteúdo e o usuário logado
  console.log({ data, user }); // Imprime no console do servidor os dados para fim de debug

  const post = {
    // Monta um novo objeto de post
    createBy: user.email, // Vincula o post ao email do usuário que estava guardado dentro do token decodificado
    ...data, // Espalha (spread operator) as propriedades recebidas do 'data' (ex: title, content) para dentro do objeto post
  };

  posts.push(post); // Salva o novo post no array em memória
  return post; // Retorna o post recém-criado de volta para o Controller
};

export const getPosts = (id) => {
  // Exporta a função que busca posts
  if (id) {
    // Verifica se um ID específico foi requisitado
    const post = posts[id]; // Busca no array pelo índice passado (simulando uma busca por ID)
    if (!post) throw new Error("post_nao_existe"); // Se a posição do array não existir, joga um erro
    return post; // Se existir, retorna apenas o post solicitado
  }
  return posts; // Se nenhum ID for passado, retorna a lista com todos os posts cadastrados
};
