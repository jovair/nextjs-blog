# Desenvolva o seu template com o framework React

Este blog foi construído a partir de um guia interativo elaborado pela [Next.js](https://nextjs.org/learn) que permitiu o seu desenvolvimento passo a passo. Ao longo do treinamento ele passou por alterações da proposta original, mas sem fugir de sua estrutura básica. As mudanças foi no sentido de aplicar os conhecimentos adquiridos no próprio curso. Uma das alterações foi a tradução do conteúdo para português, pois a versão original está em inglês. Ele não pretende substituir o curso original e não vai coletar as aulas na íntegra. Esse conteúdo tem o propósito principal de deixar documentadas as ações práticas. Acesse o [blog](https://nextjs-xi-two-91.vercel.app/) e veja o que foi desenvolvido por esse excelente framework. 


## **COMO CRIAR PÁGINAS COM NEXT.JS**

O primeiro passo é ter o ambiente de desenvolvimento apropriado.

- **Node.js** versão 10.13 ou superior instalado na sua máquina. [Clique aqui para baixá-lo](https://nodejs.org/en/);
- Editor de texto, como Visual Studio Code, Sublime, Dreamweaver, etc.
- Terminal console para testes rápidos
- [Git](https://git-scm.com/) e [Github](github.com)


## **CRIANDO O APP NEXT.JS**

- Considenrando que você tenha instalado o Node.js, naturalmente o seu npm já está funcionando, porque ele faz parte do pacote. Para começar, entre no diretório onde pretende iniciar o seu projeto por meio da console, e dê o comando:`npm init next-app nextjs-blog --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"`. Ele vai baixar a estrutura necessária e criar o app chamado nextjs-blog;
- Digite `cd nextjs-blog` para entrar dentro dessa pasta;
- execute o app com o comando `npm run dev`. Ele vai iniciar o seu app no servidor de desenvolvimento, que poderá ser visto pelo seu navegador com o comando `http://localhost:3000`. Você verá uma página com o conteúdo inicial do blog com a mensagem  ***Welcome to Next.js!*** no topo da página.


### **Páginas no Next.js**

Uma página é um Componente React, armazenada à partir do diretório pages localizado na raiz do projeto, onde fica o `index.js`, que está associado à rota `/` (raiz). Outras páginas podem ser armazenadas dentro de subdiretórios, como `pages/posts/[id].js`, que está associado à pasta posts, em que pages é considerada a raiz, ela não aparece na linhha de endereço do navegador e `index.js` é o componente que vai carregar o conteúdo da página para o navegador. 
Os os sub-diretórios de pages mais o arquivo .js compõem a rota da página no navegador (Ex.: `http://localhost:4000/posts/ssg-ssr`). Veja que não aparece a palavra pages, bem como a extensão .js no arquivo ssg-ssr. Isso porque pages é a raiz e ssg-ssr.js é o componente.

Construir uma página em Next.js é similar à construção com HTML ou PHP, porém, ao invés de escrever HTML, escreve-se com JSX e usa-se Componentes React


### **Componente Link**

Para criar links entre páginas web, geralmente são usadas as tags `<a>`. No Next.js, quem faz esse trabalho é o Componente nativo React `<Link>`. Ele faz o empacotamento da tag `<a>`, mas o href fica no próprio `<Link>`. Ele habilita a navegação entre duas páginas do lado do cliente. **Client-side navigation** significa que a transição entre as páginas é feita pelo *JavaScript*, que é mais rápido do que a navegação pelo navegador. Para utilizá-lo, ele deve ser importado de `next/link` como será demonstrado daqui a pouco.


### **Divisão e prebusca de código**

O Next.js faz a divisão de código automaticamente e cada página carrega apenas o que for necessário. Isso significa que, quando a homepage é renderizada, apenas aquele código será afetado, desprezando outras páginas naquele momento. Isto faz com que a homepage seja carregada rapidamente, mesmo que sejam adicionadas centenas de páginas.
Carregando apenas o código da página requisitada significa que as páginas permanecem isoladas. Se alguma delas apresentar erro, o resto da aplicação poderá continuar funcionando.
Além disso, em uma versão de produção do Next.js, sempre que os componentes Link aparecerem na página que está em exibição no navegador, o Next.js. automaticamente faz a pré-busca do código da página vinculada àquele(s) links em segundo plano e a página de destino será carregada quase instantaneamente quando clicada.


## **ATIVOS, METADADOS E CSS**

### **Ativos**

O Next.js pode servir arquivos, como imagens, sob o diretório public, que está na raiz do projeto. Esse diretório também é útil para robots.txt, verificador de site do Google (Google Site Verification), e outros ativos.


### **Metadados**

No Next.js o Componente nativo React `<Head>` é usado para o cabeçalho em lugar da tag `<head>`. Sendo assim, é possível modificar o cabeçalho da página. Assim como este, outros componentes podem ser usados para mudar os metadados de uma página.

`title`, `meta` ou qualquer outros elementos (e.g. `script`) precisam ser colocados diretamente dentro do componente `Head`, ou, empacotado no máximo em um nível dentro de `<react.Fragment>` ou arrays. Caso contrário as tags não serão carregadas corretamente na navegação do lado do cliente.

### **Componente Layout**

- O arquivo layout.js dentro do diretório componentes contém o componente `Layout`. É esse componente que define o layout da página principal e demais demais páginas. O arquivo index.js impora esse componente e todo o conteúdo visual fica dentro das tags  
Assim como os componentes `Link`,`Head` e `styled-js`, neste momento ela não será usada. Eles foram aplicados no treinamento original, mas depois foram removidos para dar lugar ao conteúdo definitivo. Quando começarmos a usá-los, faremos referência a este texto.

### **Estilos CSS**

A biblioteca styled-jsx é um Componente React que permite utilizar os estilos CSS sem afetar outros componentes. A estrutura CSS é utilizada dentro da tag `<style jsx>{``}</style>`. Dentro das chaves são usados os sinais de crase `(``)` e não aspas simples (''). O Next.js dá suporte ao styled-jsx, mas aceita outras bibliotecas, como [styled-components](https://github.com/vercel/styled-jsx) ou [emotion](https://github.com/vercel/next.js/tree/canary/examples/with-emotion).


### **Escrevendo e importando CSS**

O Next.js dá suporte ao `CSS` e `Sass`, podendo ser usadas bibliotecas como [Tailwind CSS](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss).

Para aplicar o CSS às tags HTML é preciso criar um componet .css contendo as classes CSS e armazenados no diretório components, mesmo lugar onde são armazenados os layouts das páginas. Esses arquivos precisam terminar com .module.css. Na página onde eles serão usados, eles são importados como styles e na tag, o estilo é aplicado entre chaves, `styles.nomeDaClasse`, conforme os modelos abaixo.

- Primeiro, o componente, chamado layout.module.css, salvo dentro de componentes

~~~javascript
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
~~~

`.container{}` é a classe que está dentro do componente

- Depois a sua aplicação dentro de uma página

~~~javascript
import styles from './layout.module.css'

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>
}
~~~

- A página importa o estilo layout.module.css;
- A função recebe um parâmetro da tag onde será aplicada;
- A classe `.container` aplica o estilo ao conteúdo recebido e;
- Retorna para a tag que o invocou.


### **Geração de identificação única para nomes de classes**

Os módulos CSS geram uma identificação única para cada classe, evitando que haja colisão, como no exemplo abaixo:
    `<div id="__next">**<div class="layout_container__2t4v2">**<h1>Primeiro post</h1><h2><a href="/">Página principal</a></h2></div></div>`
Além do máis, as características de divisão do código pelo Next.js trabalha muto bem com os módulos CSS, assegurando que uma quantidade mínima de CSS seja carrecada por cada página. Isso resulta em tamanhos de pacotes menores. Os módulos CSS são extraídos dos pacotes JavaScript no momento da construção e geram arquivos CSS carregados automaticamente pelo Next.js.

### **Estilos Globais**

Os módulos CSS descritos anteriormente são usados a nível de componentes. Para carregar estilos globais, que poderão ser utilizados em todas as páginas é preciso criar um componente específico.

O componente CSS global deve ser único e ficar alocado no diretório pages e não poderá ser importado de nenhum outro lugar. O motivo pelo qual ele não pode ser importado de outro lugar, é que ele afeta todos os elementos das páginas. Se houver alguma definição conflitante entre o estilo global e o estilo do componente, prevalece o do componente.

Em pages foi criado o arquivo _app.js contendo o componente App. Este componente na raiz poderá ser de uso comum para todas as páginas. Após criar um componente global, o servidor precisa ser reiniciado para que a sua aplicação tenha efeito.


## **APLICAÇÃO PRÁTICA**

**Nota:** Os arquivos exemplos passarão por várias transformações ao longo do treinamento. Ao invés de repetir o código várias vezes aqui no README.md como é feito no treinamento , toda a descrição dos passos será feita em um único lugar para cada componente e as funcionalidades serão descritas no próprio código.


## **COMPONENTES**

- [**`componentes/layout.module.css`**](https://github.com/jovair/nextjs-blog/blob/master/components/layout.module.css)
- [**`styles/utils.module.css`**](https://github.com/jovair/nextjs-blog/blob/master/styles/utils.module.css)
. O código CSS da página de apresentação inicial estava dentro do próprio arquivo index.js. Ao longo do curso o conteúdo da página foi completamente substituído, dando lugar aos posts do blog. Entretanto, considerando que os links para os manuais originais sejam interessantes, eles foram mantidos na primeira página, divergindo do resultado final do treinamento. Esse conteúdo estava dentro de grids CSS, que foram removidos do arquivo index.js e levados para o utils.module.css.

## **PRE-RENDERIZAÇÃO E BUSCA DE DADOS**

### **Pre-renderização**

Por padrão, o Next.js pré-renderiza todas as páginas. Isso significa que ele gera HTML para cada página antecipadamente, em vez de fazer tudo pelo JavaScript do cliente. A pré-renderização pode resultar em melhor desempenho e SEO. Cada HTML gerado é associado à menor quantidade de código JavaScript necessário para essa página e quando ela é carregada pelo navegador, o JavaScript é executado e torna a página totalmente interativa. (Esse processo é chamado de hidratação.)

### **Formas de renderização**

O Next.js tem duas formas de pre-renderização: Geração Estática e Renderização do lado do servidor. A diferença é no momento de gerar a página HTML. No modo de desenvolvimento, o método que funciona é o de renderização do lado do servidor, ou seja, cada vez que o arquivo é salvo, é feita uma nova renderização.

### **Geração estática**

É o método de pre-renderização que gera o HTML no momento da construção, podendo ser reutilizado em cada requisição, ou seja, como ele já foi gerado antes da página ser carregada, a partir daí, será rapidamente exibida para quantas requisições forem feitas. A função estática usada é a getStaticProps

### **Renderização do lado do servidor**

É o método de pre-renderização que gera o HTML em cada requisição. Esse é o tipo de renderização se você precisa buscar dados externos em tempo de execução. A função server-side é a getServerSideProps. Nesta aplicação não foi utilizado esse tipo de renderização.

### **Renderização do lado do cliente**

Essa é uma estratégia para o caso de buscar dados externos em tempo de execução. Utiliza-se o getStaticProps para carregar a página estática e depois busca os dados externos com o JavaScript.

O Next.js permite que você crie uma aplicação híbrida e escolha qual será o método utilizado por cada página. A recomendação é que seja utilizado o método estático, sempre que possível, porque a sua página pode ser construída uma vez e ser servida por CDN, o que a tornará muito mais rápida do que tendo que ser renderizada no servidor a cada nova requisição.

### **Tipos de geração estática recomendadas**

- Páginas de Marketing;
- Postagens de blogs;
- Lista de produtos de e-commerce;
- Documentação e conteúdo de ajuda

## **GERAÇÃO ESTÁTICA COM E SEM DADOS**

### **Geração estática com dados usando getStaticProps**

Quando você exporta um componente, a função assíncrona getStaticProps pode ser exportada dentro dele. Ao carregar o componente na hora da execução, a função getStaticProps busca os dados externos e passa para as propriedades da página. Na prática, essa função diz para o Next.js que possui denpendências e que antes da página ser carregada, as dependências precisam ser resolvidas.

### **Dados no blog**

1. Foi criado o diretório posts na raiz da aplicação (não é o mesmo que está em pages).
2. Foram criados os arquivos pre-rendering.md e ssg-ssr.md dentro do diretório posts. Veja que cada arquivo tem uma seção de metadados no topo, contendo título e data. Ela é chamada de YAML Front Matter, a qual pode ser passada usando uma biblioteca chamada gray-matter.

### **conteúdo do pre-rendering.md**

    ---
    title: 'Two Forms of Pre-rendering'
    date: '2020-01-01'
    ---

    Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

    - **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
    - **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

    Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

    **Conteúdo do ssg-ssr.md:**
    ---
    title: 'When to Use Static Generation v.s. Server-side Rendering'
    date: '2020-01-02'
    ---

    We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

    You can use Static Generation for many types of pages, including:

    - Marketing pages
    - Blog posts
    - E-commerce product listings
    - Help and documentation

    You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

    On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

    In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
3. Foi instalada a biblioteca gray-matter que permite passar os metadados dos arquivos markdown.
4. Foi criado o diretório lib para a criação de uma biblioteca simples para buscar dados do file system.
5. Dentro da pasta lib foi criado o arquivo posts.js com o seguinte conteúdo:

~~~javascript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
// Get file names under /posts
const fileNames = fs.readdirSync(postsDirectory)
const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
        id,
        ...matterResult.data
    }
})
// Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
        return 1
        } else {
        return -1
        }
    })
}
~~~
6. O arquivo index.js foi atualizado para receber a biblioteca posts e criada a função getStaticProps()

~~~javascript
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
const allPostsData = getSortedPostsData()
    return {
        props: {
        allPostsData
        }
    }
}
~~~
7. Foi passada a constante allPostsData retornada da função getStaticProps() para a função Home e adicionada mais uma seção no final da home.

**SWR**

A equipde do Next.js criou um mecanismo de busca do lado do cliente, chamado SWR, que não foi abordado neste treinamento, mas foi altamente recomendado e será visto futuramente

**ROTAS DINÂMICAS**

Implementando getStaticPaths
1. Foi criado o arquivo [id].js dentro do diretório pages/posts. A sintaxe usando [] significa que o conteúdo deste arquivo será dinâmico.

~~~javascript
import Layout from '../../components/layout'
import { getAllPostIds } from '../../lib/posts'

export default function Post({ postData }) {
    return (
        <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        </Layout>
    )
}

export async function getStaticPaths() {
const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}
~~~

2. Foi removido o arquivo first-post dentro do diretório pages/posts, criado no início do treinamento.
3. Foram adicionadas as funções getAllPostIds() e getPostData(id) no arquivo lib/posts.js

~~~javascript
export function getAllPostIds() {
const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        return {
        params: {
            id: fileName.replace(/\.md$/, '')
        }
        }
    })
}

export function getPostData(id) {
const fullPath = path.join(postsDirectory, `${id}.md`)
const fileContents = fs.readFileSync(fullPath, 'utf8')

// Use gray-matter to parse the post metadata section
const matterResult = matter(fileContents)

// Combine the data with the id
    return {
        id,
        ...matterResult.data
    }
}
~~~

4. Foi instalada a biblioteca remark para renderizar o Markdown.
5. Foram importados os componentes e atualizada a função getPostData(id) para lib/posts.js:
    import remark from 'remark'
    import html from 'remark-html'
6. A função getStaticProps em pages/posts/[id].js foi atualizada para usar o await quando o getPostData for invocado.
7. O componente Post foi atualizado para renderizar o contentHtml usando dengerouslySetInnerHTML

