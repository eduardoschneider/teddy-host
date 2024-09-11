# Teddy Test - Host Application

Um projeto que utiliza a arquitetura de micro front-ends com React e TypeScript, integrando vários micro front-ends em um único host.

## Visão Geral

Este projeto utiliza a arquitetura de micro front-ends para modularização e escalabilidade. Inclui um **host** e múltiplos **micro front-ends** que interagem de forma independente, proporcionando uma experiência modular e escalável.

### Funcionalidades

- **Micro Front-ends**: Separação do front-end em módulos independentes.
- **Autenticação**: Protege rotas privadas e redireciona usuários não autenticados.
- **Tabela Responsiva**: Exibição de dados com suporte a dispositivos móveis.
- **Modal para Cadastro**: Interface para criação e edição de dados.
- **Paginação**: Controle de navegação entre páginas de dados.

## Tecnologias Utilizadas

- **React 18**: Biblioteca para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Axios**: Biblioteca para requisições HTTP.
- **React Router**: Biblioteca para roteamento e navegação.
- **SCSS**: Pré-processador CSS para estilização.
- **Module Federation**: Para integração de micro front-ends.

## Estrutura do Projeto

- **/src**: Código fonte do projeto.
  - **/components**: Componentes reutilizáveis.
  - **/pages**: Páginas e rotas do aplicativo.
  - **/utils**: Funções e serviços para comunicação com APIs.
- **/public**: Arquivos estáticos e de configuração.

## Configuração de Micro Front-ends

- **Host**: O projeto principal que carrega os micro front-ends. Configurado para usar o Module Federation para integrar e carregar micro front-ends.
- **Micro Front-ends**: Projetos independentes que são carregados pelo host usando Module Federation. Cada micro front-end pode ser executado e testado separadamente.

## Configuração de Micro Front-ends
- Qualquer um pode integrar nesse projeto, basta criar um novo projeto React e configurar o Module Federation, e após configurar todo webpack expondo seu novo projeto, adicionar no webpack desse projeto host para ele conseguir encontrá-lo.

### Comunicação Entre Host e Micro Front-ends

Para passar dados e interagir entre o host e os micro front-ends:

1. **Exportação e Importação de Funções**: Exporte funções ou componentes dos micro front-ends que precisam ser usados pelo host e vice-versa.

## Requisitos que foram cumpridos

* Desenvolver em micro-front ends separadas por contextos;
* Preparar um read.me com tudo necessário
* Preparar imagem dos projetos para subir num cloud
* Página de login que salva em cookies e local storage
* Manter usuário logado via cookie e local storage
* Página inicial com menu
* CRUD completo de parceiros
* CRUD completo de empresas externas
* Sair para limpar os cookies e local storage
* Paginação via URL para acesso direto da página, com redirect incluso.
* CRUD persistido via API
* Testes automatizados
* Testes unitários
* Vídeo explicativo sobre o projeto

## TODO List
* Deploy no Vercel
* Iniciar com Vite
* Deploy no github pages

## Como usar

### Imagens prontas no DockerHub
```bash
docker pull eduschneiders/docker-host:latest
docker pull eduschneiders/docker-microfrontend-empresas:latest
docker pull eduschneiders/docker-microfrontend-parceiros:latest
```

### Para rodar esse projeto
```bash
# Clone todos os repositórios necessários, com seus micro-frontends
$ git clone https://github.com/eduardoschneider/teddy-host
$ git clone https://github.com/eduardoschneider/empresas-micro
$ git clone https://github.com/eduardoschneider/parceiro-micro

# Acesse seus repositórios
$ cd teddy-host
$ cd empresas-micro
$ cd parceiro-micro

# Instale as dependencias em todos
$ npm install

# Rode os três
$ npm start
```
## Utilizando
- Agora você acessa http://localhost:3000 e o projeto deve estar funcionando normalmente.
- Os dois micro front-ends base estão na porta 3001 e 3002, respectivamente.
