---
title: 'Duas formas de usar pre-renderização'
date: '2020-07-01'
---

O Next.js tem duas formas de pre-renderização: Geração estática **(Static Generation)** e renderização do lado do servidor **(Server-side Rendering)**. A diferença é percebida **quando** a página HTML é gerada.

- **Geração estática** é o método de pre-renderização que gera o HTML em **tempo de construção**, podendo ser reutilizado a cada nova requisição, ou seja, como ele já foi gerado antes da página ser carregada, à partir daí, será rapidamente exibida para quantas requisições forem feitas.
- **Renderização do lado do servidor** é o método que gera o HTML em **cada requisição**. É o caso de quem precisa atualizar uma query no banco de dados, em tempo de execução. Se é uma página de lançamento, por exemplo, a cada nova informação, o código HTML será gerado novamente.

A terceira opção, como alternativa, para quem precisa das duas coisas, seria a renderização do lado do cliente **(Client-side Rendering)**. A página seria pre-renderizada e a busca externa seria feita pelo JavaScript para preencher o restante.

**Importante:** O Next.js permite que você **escolha** qual a forma de pre-renderização para cada página. Você pode criar uma aplicação "híbrida" usando a geração estática para a maior parte das páginas e usar o Server-side Rendering para as outras.