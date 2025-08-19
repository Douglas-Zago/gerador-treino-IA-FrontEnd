# 🏋️ Gerador de Treino com IA (Front-end)

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## 📖 Tabela de Conteúdos

1.  [Visão Geral](#-visão-geral)
2.  [Funcionalidades Detalhadas](#-funcionalidades-detalhadas)
3.  [Equipe de Desenvolvimento](#-equipe-de-desenvolvimento)
4.  [Pré-requisitos](#-pré-requisitos)
5.  [Como Executar](#-como-executar)
6.  [Estrutura do Projeto](#-estrutura-do-projeto)
7.  [Scripts Disponíveis](#-scripts-disponíveis)

---

## 🎯 Visão Geral

Este é o front-end do projeto Gerador de Treino, uma Single Page Application (SPA) construída com React, Vite e TypeScript. A interface permite que o usuário selecione suas preferências de treino de forma intuitiva, gerando um prompt detalhado que é enviado para uma API de back-end. A resposta da IA, contendo o plano de treino, é então exibida de forma clara e formatada para o usuário.

## ✨ Funcionalidades Detalhadas

-   [x] **Formulário Interativo:** Permite ao usuário selecionar:
    -   Objetivo Principal (Hipertrofia, Emagrecimento, etc.)
    -   Nível de Experiência (Iniciante, Intermediário, Avançado)
    -   Dias da Semana para Treinar
    -   Equipamentos Disponíveis (Peso Corporal, Academia Completa, etc.)
-   [x] **Geração de Prompt Dinâmico:** Constrói uma string de prompt otimizada com base nas seleções do usuário.
-   [x] **Comunicação Assíncrona:** Utiliza a `Fetch API` para enviar o prompt ao back-end e aguardar a resposta sem travar a interface.
-   [x] **Exibição de Resultado:** Apresenta o plano de treino formatado recebido do back-end.
-   [x] **Feedback Visual:** Mostra um indicador de carregamento (`loading spinner`) enquanto a requisição está em andamento.
-   [x] **Design Responsivo:** Interface adaptável para diferentes tamanhos de tela.
-   [x] **Tema Claro e Escuro (Dark Mode):** Permite ao usuário alternar o tema da aplicação.

---
## 👨‍💻 Equipe de Desenvolvimento

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Douglas-Zago">
        <img src="https://avatars.githubusercontent.com/u/101890331?v=4" width="100px;" alt="Foto de Douglas Zago no GitHub"/><br>
        <sub>
          <b>Douglas Zago</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/1?v=4" width="100px;" alt="Foto de David Scheidt no GitHub"/><br>
        <sub>
          <b>David Scheidt</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/2?v=4" width="100px;" alt="Foto de Murilo Lange no GitHub"/><br>
        <sub>
          <b>Murilo Lange</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

---

## 📋 Pré-requisitos

-   **Node.js** (versão 18 ou superior)
-   **npm** ou **yarn**
-   O **Back-end do projeto** deve estar em execução para que as requisições funcionem.

## ▶️ Como Executar

1.  **Clone o repositório:**
    ```sh
    git clone <url-do-seu-repositorio>
    cd treino-api-frontend
    ```

2.  **Instale as dependências do projeto:**
    ```sh
    npm install
    ```

3.  **Execute a aplicação em modo de desenvolvimento:**
    ```sh
    npm run dev
    ```
A aplicação iniciará e estará disponível no endereço exibido no terminal (geralmente `http://localhost:5173` ou outra porta disponível).

## 📂 Estrutura do Projeto

A estrutura principal do código-fonte está dentro da pasta `src/`:

-   `components/`: Contém os componentes React reutilizáveis.
    -   `ui/`: Componentes da biblioteca `shadcn/ui`.
    -   `WorkoutForm.tsx`: O componente principal que contém o formulário e a lógica de estado.
-   `App.tsx`: O componente raiz da aplicação, onde o `WorkoutForm` é renderizado.
-   `main.tsx`: O ponto de entrada da aplicação React.

### Conexão com o Back-end

A URL da API de back-end está definida diretamente na chamada `fetch` dentro do componente `WorkoutForm.tsx`. Por padrão, está configurada para:
`http://localhost:8080/api/gerar-treino`

Certifique-se de que o back-end esteja rodando neste endereço ou ajuste a URL no código, se necessário.

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

-   `npm run dev`: Inicia a aplicação em modo de desenvolvimento.
-   `npm run build`: Compila a aplicação para produção, gerando os arquivos estáticos na pasta `dist/`.
-   `npm run preview`: Inicia um servidor local para visualizar a versão de produção (após o build).

---
