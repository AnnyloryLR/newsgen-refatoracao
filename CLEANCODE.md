Revisão

#arquivo: news-repository.ts

- funções:
	getNoticias(),
	getNoticiaById(),
	createNoticia(),
	updateNoticia(),
	removeNoticia() tem nomes em português, enquanto as varíaveis que 
compõem as funções estão em inglês. Além disso, só fazer a tradução fará com que os nomes sejam o mesmo das funções da camada "service", portanto, os nomes foram alterados quando possível.

#arquivo: news-service.ts

- getNews() tem nome pouco semântico;
- getSpecificNews() tem nome pouco semântico;
- createNews() é o mesmo nome da função no arquivo da camada 
"repository";
- deleteNews() é representa melhor a função da camada "repository", portanto, foi mudado para não ficar igual;
- validate() tem nome pouco semântico;





