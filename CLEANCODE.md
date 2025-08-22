Revisão

#arquivo: news-repository.ts

- funções:
	getNoticias(),
	getNoticiaById(),
	createNoticia(),
	updateNoticia(),
	removeNoticia() tem nomes em português, enquanto as varíaveis que 
compõem as funções estão em inglês.

Além disso, só fazer a tradução fará com que os nomes sejam os mesmos das funções da camada "service", portanto, os nomes foram alterados quando possível.


#arquivo: news-service.ts

- função getNews tem nome pouco semântico;

- função getSpecificNews tem nome pouco semântico;

- função createNews tem o mesmo nome da função no arquivo da camada 
"repository";

- função deleteNews representa melhor a função da camada "repository", portanto, foi mudado para não ficar repetido;

- função alterNews tem trecho de complexidade boleana (news.title !== newsData.title) que pode ser atribuída a uma variável para melhor entendimento;

- função validate tem nome pouco semântico;

- função validate tem variável newsWithTitle com  nome pouco semântica;

- função validate tem trecho de complexidade boleana (newsData.text.length < 500) que pode ser atribuído a uma variável para melhor entendimento;

- função validate não especifica o que representa o número 500;

- função validate é uma função com muitas responsabilidades e de difícil entendimento;

#arquivo: news-controller.ts

- função getNews tem nome pouco semântico;

- função getSpecificNews tem nome pouco semântico;

- função getSpecificNews tem trecho de complexidade boleana (isNaN(id) || id <= 0) que pode ser atribuído a uma variável para melhor entendimento;

- função alterNews tem o nome repetido, pois é o mesmo na camada "service";

- função alterNews tem trecho de complexidade boleana (isNaN(id) || id <= 0) que pode ser atribuído a uma variável para melhor entendimento;

- função deleteNews tem trecho de complexidade boleana (isNaN(id) || id <= 0) que pode ser atribuído a uma variável para melhor entendimento;


#arquivo: error-handler.ts

- função errorHandlingMiddleware tem uso excessivo de if-else;

#arquivo: server.ts

- o número 3000 pode ter seu uso inferido da função, mas para ficar claro na leitura, melhor atribuir a uma variável;



	






