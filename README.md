# Labirinto - Jogo

Este projeto é um jogo de labirinto desenvolvido com base no curso disponível no YouTube: [Curso Phaser.js](https://www.youtube.com/watch?v=SSlIJOD-JMU&list=PLclUTiUoLCbDog-vStY7VFHpFXJVML6EY&index=1). O jogo foi refatorado para utilizar Programação Orientada a Objetos (POO), além de ter sido migrado para Phaser 3 e modernizado com Vite, ESLint e Prettier.

## Tecnologias Utilizadas

- **Linguagem:** Typescript
- **Framework:** [Phaser 3](https://phaser.io/)
- **Empacotador:** [Vite](https://vitejs.dev/)
- **Linter:** [ESLint](https://eslint.org/)
- **Formatador de Código:** [Prettier](https://prettier.io/)

## Instalação e Execução

1. Clone este repositório:

   ```sh
   git clone https://github.com/seu-usuario/labirinto.git
   cd labirinto
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Execute o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

4. Acesse o jogo no navegador em `http://localhost:3000/` (ou a porta indicada pelo Vite).

## Estrutura do Projeto

```
labirinto/
│── src/                # Código-fonte do jogo
│   ├── scenes/         # Cenas do jogo
|       ├── entities/   # Entidades do jogo
|       ├── managers/   # Gerenciadores
|       ├── stages/     # Fases do jogo
│   ├── assets/         # Recursos visuais e sonoros
|   ├── controls/       # Controles do jogo (Ex: Hud, GameManager, ...)
│   ├── main.js         # Entrada principal do jogo, configuração
│── public/             # Arquivos públicos
│── .eslintrc.json      # Configuração do ESLint
│── .prettierrc         # Configuração do Prettier
│── log.js              # Configuração de logs
│── tsconfig.json       # Configuração do typescript
│── vite.config.mts     # Configuração do Vite
│── package.json        # Dependências e scripts
│── README.md           # Documentação do projeto
```

## Melhorias Implementadas

- Refatoração do código para Programação Orientada a Objetos (POO)
- Atualização para Phaser 3
- Uso do Vite para um ambiente de desenvolvimento mais rápido
- Implementação de ESLint e Prettier para manter a qualidade do código

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou sugestões. Basta abrir uma _issue_ ou um _pull request_ neste repositório.

## Licença

Este projeto é distribuído sob a licença ISC.

## Imagens
