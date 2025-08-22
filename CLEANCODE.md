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

- getNews() tem nome pouco semântico;

- getSpecificNews() tem nome pouco semântico;

- createNews() é o mesmo nome da função no arquivo da camada 
"repository";

- deleteNews() é representa melhor a função da camada "repository", portanto, foi mudado para não ficar igual;

- alterNews tem trexo de complexidade boleana (news.title !== newsData.title) que pode ser atribuída a uma variável para melhor entendimento;

- validate() tem nome pouco semântico;

- validate() tem variável newsWithTitle com  nome pouco semântica;

- validate() tem trexo de complexidade boleana (newsData.text.length < 500) que pode ser atribuída a uma variável para melhor entendimento, além de não se especificar o que é o número 500;

-validate() é uma função com muitas responsabilidades e de difícil entendimento;


#arquivo: error-handler.ts
	






