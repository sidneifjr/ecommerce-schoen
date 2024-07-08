# Teste Técnico - Desenvolvedor Frontend Pleno

Feito com Node, v20.12.2.

## Requisitos.

- [x] **Lista de Produtos**: Exibir uma lista de produtos com nome, imagem, preço e categoria.
- [x] **Filtros**: Implementar filtros por busca de nome, categoria e faixa de preço.
- [x] **Detalhes do Produto**: Ao clicar em um produto, exibir seus detalhes (nome, descrição, preço, imagem e categoria).
- [x] **Carrinho de Compras**: Permitir adicionar e remover produtos do carrinho.
- [x] **Checkout**: Implementar um processo de checkout simples.
- [x] **Responsividade**: A aplicação deve ser totalmente responsiva.
- [x] **Next.js**: Utilize as funcionalidades de roteamento e geração de páginas estáticas do Next.js.
- [x] **Estilização**: Utilize TailwindCSS ou CSS Modules.

### O que nós ficaríamos felizes de ver em seu teste.

- [x] Implementação de testes unitários e/ou de integração.
- [x] Implementação de Server Components.

## Execução

### Desenvolvimento.

1. `pnpm i`, para instalar as dependências.

2. `pnpm dev`, para iniciar o servidor de desenvolvimento.

### Produção.

`pnpm build`.

### Prévia.

`pnpm build`, então `pnpm start`.

### Testes.

`pnpm test`.

## Stack

- React
- Next.js
- TypeScript
- ESLint/Prettier
- TailwindCSS
- shadcn
- React Hook Form
- Zod
- Vitest
- Sonner
- pnpm


## Sobre o projeto

Foi uma experiência enriquecedora e repleto de desafios, expondo oportunidades para experimentar com diferentes features do React e Next.js para solucionar vários problemas.

<b>React 19</b> e <b>Next.js 15</b> foram usados, devido às suas melhorias de performance e experiência de desenvolvimento. Embora ainda estejam em sua versão RC (Release Candidate), ambos se provaram estáveis o suficiente para uso neste projeto. Porém, algumas funcionalidades não foram utilizadas, pois não estão bem documentadas atualmente.

<b>TailwindCSS</b> e <b>shadcn</b> foram escolhidos para acelerar o desenvolvimento, garantindo consistência e facilitando a criação de interfaces com alta qualidade.

<b>shadcn</b>, em particular, fornece uma estilização padrão fácil de extender e alto nível de controle sobre seus componentes. Sua integração com a Radix UI fornece várias soluções em relação à acessibilidade, influenciando positivamente várias métricas chave.

<b>React Hook Form</b> é fácil de usar e fornece muitas otimizações importantes ao lidar com uma quantidade maior de campos.

<b>Zod</b> fornece validação de schemas, útil na validação de formulário ou variáveis de ambiente. O mesmo também executa durante o runtime, permitindo um type checking mais forte que o TypeScript em certos cenários.

<b>Vitest</b> possui uma API muita semelhante ao Jest, ao mesmo tempo em que fornece um ganho significativo de performance. Uma integração com a <b>Testing Library</b> permite acesso à uma camada mais profunda de testes, enquanto <b>user-event</b> permite simular o disparo de eventos no lado cliente.

<b>pnpm</b> é um gerenciador de pacotes rápido e estável. Também é eficiente, reutilizando os pacotes já presentes em sua máquina, a qual é uma vantagem considerável sobre o <b>Bun</b>, dependendo do cenário.

Patterns como <b>SOLID</b>, <b>Composition</b> e <b>Custom Hooks</b> foram ferramentas indispensáveis na construção do projeto, facilitando a separação de responsabilidades, reutilização de código e manutenção de cada componente.

Os componentes foram abstraídos de forma a permitir uma maior separação entre as camadas de lógica e visual, semelhante à pattern de <b>Dumb e Smart Components</b>, porém um cuidado maior foi empregado para evitar excesso de abstrações, a qual poderia potencialmente poderia dificultar a navegação pelo projeto.

Um aspecto importante a mencionar é que há uma ligeira diferença entre o peso da fonte renderizada no Figma e o browser: https://forum.figma.com/t/why-does-a-font-weight-in-figma-seem-lighter-than-the-same-weight-in-the-browser/2207; assim, não é possível garantir 100% de paridade com o layout fornecido, pois cada dispositivo processa fontes e propriedades relacionadas de uma forma diferente.

<b>Obs.</b>: o erro "Warning: Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release." exibido no console ocorre devido à remoção de forwardRef e definição de "ref" como um prop comum. Isso não afeta o funcionamento dos componentes no shadcn.

<b>Obs. 2</b>: Boilerplate gerado via Progenitor: https://github.com/sidneifjr/Progenitor

## Estrutura de pastas

```
└── 📁technical-test
    └── .eslintrc.json
    └── .gitignore
    └── .prettierrc
    └── components.json
    └── LICENSE
    └── next-env.d.ts
    └── next.config.mjs
    └── package.json
    └── pnpm-lock.yaml
    └── postcss.config.mjs
    └── 📁public
        └── cart.svg
        └── check-circle.svg
        └── close.svg
        └── customer.svg
        └── eye-off.svg
        └── eye.svg
        └── hero-image.jfif
        └── logo.svg
        └── minus.svg
        └── order-fulfilled.svg
        └── pix.svg
        └── plus.svg
        └── product-image.png
        └── 📁products
            └── product-1.png
            └── product-2.png
            └── product-3.png
        └── sad.svg
        └── search.svg
        └── trash.svg
        └── vercel.svg
    └── README.md
    └── 📁src
        └── 📁app
            └── 📁cart
                └── page.tsx
            └── favicon.ico
            └── globals.css
            └── layout.tsx
            └── loading.tsx
            └── page.tsx
            └── 📁products
                └── 📁[slug]
                    └── page.tsx
        └── 📁assets
            └── loader.svg
        └── 📁components
            └── 📁cart
                └── cart-details.tsx
                └── 📁cart-list
                    └── cart-list-item-buttons.tsx
                    └── index.tsx
                └── 📁cart-modal
                    └── cart-modal-form-default.tsx
                    └── cart-modal-form-fulfilled.tsx
                    └── index.tsx
                    └── input-field.tsx
            └── header.tsx
            └── hero.tsx
            └── loader.tsx
            └── no-products-found.tsx
            └── 📁product
                └── index.tsx
                └── product-carousel-thumb.tsx
                └── product-carousel.tsx
                └── product-info.tsx
            └── 📁product-list
                └── index.tsx
                └── product-list-heading.tsx
                └── product-list-item.tsx
                └── product-list-side-menu.tsx
            └── slider.tsx
            └── 📁typography
                └── h1.tsx
                └── h2.tsx
                └── h3.tsx
                └── h4.tsx
                └── large.tsx
                └── lead.tsx
                └── paragraph.tsx
                └── small.tsx
            └── 📁ui
                └── aspect-ratio.tsx
                └── button.tsx
                └── card.tsx
                └── carousel.tsx
                └── checkbox.tsx
                └── dialog.tsx
                └── input.tsx
                └── label.tsx
                └── navigation-menu.tsx
                └── sonner.tsx
        └── 📁contexts
            └── cart-context.tsx
        └── 📁data
            └── product-list.tsx
        └── 📁hooks
            └── useCarousel.ts
            └── useCart.ts
            └── useFilterProducts.ts
            └── useFindProduct.ts
            └── useModal.ts
            └── useShowPassword.ts
        └── 📁lib
            └── utils.ts
        └── 📁modules
            └── capitalizeFirstLetter.ts
            └── formatCurrency.ts
            └── handleAccentedCharacters.ts
        └── 📁tests
            └── page.test.tsx
        └── 📁types
            └── index.ts
    └── tailwind.config.ts
    └── tsconfig.json
    └── vitest.config.ts
```

## Pontos de melhoria

1) Testes unitários mais extensivos.
2) Testes e2e, para validar Server Components (conforme recomendado pelos docs do Next.js, mas não é parte dos requisitos).
3) Refatorar useFilterProducts, de forma a permitir amelhor interação entre as três funcionalidades de filtragem (não faz parte dos requisitos).

## Instruções

Olá, este é o teste que nós utilizamos para avaliar tecnicamente todas as pessoas que estão participando do processo seletivo para a vaga.

Você deverá criar um **fork** deste projeto, e desenvolver em cima do seu fork. Use o **README** principal do seu repositório para nos contar como foi resolver seu teste, as decisões tomadas, como você organizou e separou seu código, e principalmente as instruções de como rodar seu projeto.

Mostre que você é bom e nos impressione, mas não esqueça do objetivo do projeto.

### Desafio.
Este teste foi projetado para avaliar suas habilidades em React e Next. O objetivo é criar um site para marketplace onde os usuários possam visualizar produtos, filtrar por categorias, adicionar produtos ao carrinho e finalizar a compra. Utilize a API JSONPlaceholder (https://jsonplaceholder.typicode.com/) para simular o backend ou caso não conseguir, faça o gerenciamento por estados.

**Observação**
Estamos disponibilizando o figma do projeto para ser seguido: 

[Protótipo](https://www.figma.com/proto/t3XDiGItGX4GAHtGavTT25/E-commerce-FLOW?node-id=3-3104&t=ZjljIpIHHZPSwrBI-0)

[Layout](https://www.figma.com/design/t3XDiGItGX4GAHtGavTT25/E-commerce-FLOW?node-id=0-1&t=jhTM13489cfiVXfI-1)

O protótipo é navegável, através dele você conseguirá ver todo o fluxo.

### O que nós esperamos do seu teste.
1. **Organização do Código**: Estrutura do projeto e clareza do código.
2. **Funcionalidade**: Todos os requisitos funcionais devem ser atendidos.
3. **Usabilidade**: A interface deve ser intuitiva e fácil de usar.
4. **Performance**: A aplicação deve ser rápida e eficiente.
5. **Boas Práticas**: Código limpo, reutilizável e seguindo as melhores práticas de desenvolvimento.
6. **Documentação**: README claro e detalhado, explicando como rodar a aplicação e qualquer outro detalhe relevante.

### O que nós não gostaríamos.
- Descobrir que não foi você quem fez seu teste.
- Ver commits grandes, sem muita explicação nas mensagens em seu repositório.