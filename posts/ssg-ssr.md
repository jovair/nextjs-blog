---
title: 'Static Generation x Server-Side Rendering'
date: '2020-07-02'
---

A Next.js recomenda usar o método de geração estática **(Static Generation)** (com ou sem dados) sempre que possível, porque a sua página pode ser construída apenas uma vez e servida como CDN, o que a torna mais rápida do que sendo renderizada a cada requisição.

Você pode usar **Static Generagion** para muitos tipos de páginas, incluindo:

- Páginas de Marketing
- Blogs
- Lista de produtos E-commerce
- Páginas de ajuda e documentação

Faça a pergunta a si mesmo: "Eu posso pre-renderizar esta página **antes** da requisição do usuário? Se a resposta for sim, então você deveria escolher Static Generation.

Por outro lado, Static Generation **não** é uma boa ideia se você não pode pre-renderizar a página antes da requisição do usuário. Talvez a sua página atualize dados com frequência e o seu onteúdo altera a cada requisição.

Neste caso, você pode usar o método de renderização do lado do servidor **(Server-Side Rendering)**. O processo será mais lento, mas a página pre-renderizada será sempre atualizada. Ou você pode abandonar a pre-renderização e usar o client-side JavaScript para carregar os dados.