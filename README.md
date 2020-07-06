# B2W - Victor Levy

### DESAFIO

O desafio é criar uma página HTML que através da Geocoding API (Google Maps) pesquise endereços e apresente a localização exata no mapa. Sabemos que um mesmo endereço resumido pode ser encontrado em diversos locais, por exemplo a pesquisa por "Rua Nova York" retorna mais de um local possível. Para estes casos, apresente quais foram os resultados retornados e dê a opção de escolha para o usuário.

### DIFICULDADES

Utilizando a Geocoding API, os retornos das requisições que testei retornavam sempre um único resultado. Parte do desafio, entretanto, era possibilitar ao usuário a escolha de um local a partir de uma lista, caso digitasse um endereço ambíguo.

### SOLUÇÕES

Uma das opções para solucionar essa questão seria utilizar a biblioteca do Places, da API do Google Maps. A biblioteca nos possibilita utilizar um método de Autocomplete, a partir de um campo de input, como sugere a própria [documentação da API](https://developers.google.com/maps/documentation/geocoding/best-practices).

> If your automated system processes a high rate of ambiguous queries that are derived from user input, you may benefit from adding an interactive element to your app using the Place Autocomplete service in the Places API, since it is designed to return multiple possible options and to allow a user to choose between them.

Apesar de ser a solução que acredito ser a melhor em questão de usabilidade, eu não estaria fazendo uma requisição AJAX explicitamente e avaliei que essa era uma etapa importante do desafio, uma vez que nas referências do briefing estava um material sobre AJAX.

Assim, optei por fazer uma primeira requisição que buscava algumas Predictions do Places API. As requisições retornam uma lista de até 5 locais, caso o input do usuário não seja específico o suficiente. Ao clicar em uma das opções mostradas, uma nova requisição é feita na Geocoding API (essa segunda requisição é feita automaticamente se a API retornar apenas um resultado).

Apesar da chave da API do Maps ficar disponível no corpo do código, utilizei o 'dotenv' apenas como boa prática.

### EXTRA

Como funcionalidade extra, desenvolvi a possibilidade de o usuário salvar o local pesquisado como favorito. Um botão também oferece a possibilidade de mostrar todos os favoritos do usuário. Além disso, esses favoritos são salvos em localStorage.

### INSTALAÇÃO DO PROJETO
Para visualizar um DEMO do projeto, basta entrar [nesse link](https://vilevy.github.io/teste-b2w-victor-levy/)

1. Faça download desse repositório.
2. Rode o comando abaixo no terminal, dentro da pasta do projeto (é necessário ter o gerenciador de pacotes npm instalado)
```bash
npm install
```
3. Após a instalação das dependências, rode o comando:
```bash
npm start
```
4. Em seu navegador, entre no endereço
```http://localhost:8080/```




