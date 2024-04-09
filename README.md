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

## Como funciona a validação de CPF

A validação do CPF segue algumas regras específicas:

1. O CPF deve conter 11 dígitos numéricos.
2. Não pode ser uma sequência de dígitos repetidos, como "111.111.111-11" ou "22222222222".
3. Os dois dígitos verificadores devem ser calculados corretamente.
4. O primeiro dígito verificador é calculado a partir dos primeiros 9 dígitos do CPF.
5. O segundo dígito verificador é calculado a partir dos 10 primeiros dígitos do CPF, incluindo o primeiro dígito verificador.

Se ambos os dígitos verificadores calculados coincidirem com os dígitos verificadores fornecidos no CPF, então o CPF é considerado válido.

Essas são as regras básicas para validar um CPF. A função `isValidCPF` que forneci anteriormente implementa essas regras de forma mais simplificada e legível.

A função `isValidCPF` verifica se um CPF é válido ou não com base em determinados critérios. Aqui estão alguns exemplos de CPFs que dariam erro e CPFs que seriam válidos de acordo com essa função:

### CPFs que dariam erro:

   - 000.000.000-00
   - 111.111.111-11
   - 222.222.222-22
   - 333.333.333-33
   - 444.444.444-44
   - 555.555.555-55
   - 666.666.666-66
   - 777.777.777-77
   - 888.888.888-88
   - 999.999.999-99
   - 123
   - 123456789
   - ABCDEFGHIJK

### CPFs que seriam válidos:

   - 123.456.789-09
   - 987.654.321-00
   - 01234567890
   - 12345678909
   - 529.982.247-25
   - 333.444.555-66
   - 123.456.789-09
   - 87654321098
