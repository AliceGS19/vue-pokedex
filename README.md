# vue-pokedex
Aplicação de pokedex contruída com o framework Vue.js, na linguagem Typescript.

---

# Bibliotecas utilizadas:
- vuex;
- vue-router;
- axios.

---

# Deploy

Motor:
- node.js.
  
Linguagen:
- JavaScript.

Bibliotecas utilizadas:
- express;
- serve-static;

---

# Funcionalidades por página:
Página inicial:
- Exibição de um card de pokémon com botão para favoritar/desfavoritar;
- Botão "Pokémon posterior" (desabilitado quando no último pokémon da lista): Troca o pokémon para o próximo da lista(API);
- Botão "Pokémon anterior" (desabilitado quando no primeiro pokémon da lista): Troca o pokémon para o anterior da lista(API);
- Botão "Me surpreenda": Troca o pokémon para algum aleatório (pode acontecer de retornar para o mesmo pokémon);
- Input numérico para pesquisa por ID;
- Botão "Pesquisar": pesquisa um pokémon pelo número inteiro absoluto mais próximo do que estiver digitado na barra. Caso o id digitado seja 
menor ou igual a 0 ou maior que 898, um alert será disparado, o pokémon na tela não será alterado e o valor do input numérico será zerado.
Caso o valor digitado seja válido, uma requisição na api será feita para mudar o pokémon no card, em caso de falha na requisição, o mesmo
processo para quando o id digitado não é valido será realizado.
- Link para a página pokémons favoritos: Altera a rota para acessar página de pokémons favoritos.

Página Pokémons favoritos:
- Link para página inicial (pokédex);
- Tag com a mensagem "Não há pokémons favoritos" (caso não haja pokémons favoritos);
- Exibição de cards para todos os pokémons favoritos (caso haja algum) com botão para favoritar/desfavoritar
OBS: Pokémons favoritos que forem desfavoritados na página dos pokémons favoritos desaparecerão da mesma somente após voltar para a página
inicial e retornar para a página de pokémons favoritos.
