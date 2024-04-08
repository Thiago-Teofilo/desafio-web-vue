# Documentação

Esta é a documentação da interface Vue.js desenvolvida em TypeScript, utilizando o framework Tailwind CSS para estilização. Antes de executar a interface, é necessário garantir que a API do repositório [desafio-api-nestjs](https://github.com/Thiago-Teofilo/desafio-api-nestjs) esteja em execução na máquina local. A URL da API deve ser configurada dentro do arquivo `.env` deste projeto Vue.js.

## Configuração do Ambiente

Antes de executar a interface Vue.js, siga os passos abaixo:

1. Certifique-se de ter a API do repositório [desafio-api-nestjs](https://github.com/Thiago-Teofilo/desafio-api-nestjs) executando localmente.

2. Crie um arquivo `.env` na raiz do projeto Vue.js e defina a URL da API neste arquivo. Por exemplo:
   ```
   API_URL=http://localhost:3000
   ```

## Telas Responsivas

A interface Vue.js é totalmente responsiva e contém telas adaptáveis para diferentes dispositivos e tamanhos de tela.

## Funcionalidades

A interface Vue.js integrada à API NestJS permite a interação com o CRUD de usuários. As funcionalidades disponíveis incluem:

- Visualizar todos os usuários
- Adicionar um novo usuário
- Editar os dados de um usuário existente
- Excluir um usuário

Para obter mais detalhes sobre as funcionalidades disponíveis, consulte a documentação da API fornecida pelo repositório [desafio-api-nestjs](https://github.com/Thiago-Teofilo/desafio-api-nestjs).

## Executando a Interface

Após configurar o ambiente e garantir que a API esteja em execução, você pode iniciar a interface Vue.js executando o seguinte comando:

```bash
npm run serve
```

Isso iniciará o servidor de desenvolvimento e você poderá acessar a interface através do navegador utilizando o endereço fornecido no console.

Esta é uma visão geral básica da interface Vue.js. Para obter mais informações sobre as funcionalidades específicas e detalhes de implementação, consulte a documentação e o código-fonte fornecidos no repositório da interface.