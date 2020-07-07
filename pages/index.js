// Componente nativo do React que prepara o cabeçalho do site para ser aplicado corretamente
import Head from 'next/head'

// importa o título do site para ser aplicado na aba do navegador
import Layout, { siteTitle } from '../components/layout'

// importa as classes do utils.module.css que está em styles
import utilStyles from '../styles/utils.module.css'


import { getSortedPostsData } from '../lib/posts'

// importa o componente nativo do React para a criação de links entre as páginas
import Link from 'next/link'


import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={utilStyles.headingMd}>
          <p>Formado em Análise de Sistemas, com especização em Gerência de Projetos. Você pode entrar em contato comigo pelo <a href="https://twitter.com/silva_jovair">Twitter</a> </p>
        </div>
        <div className={utilStyles.headingP}>
          <p>
            Este blog foi desenvolvido com base no treinamento de<a href="https://nextjs.org/learn/basics/create-nextjs-app"> Next.js</a>, que fornece todos os passos para a construção de um site, originalmente
            em inglês. Esta interface está em português para ajudar pessoas tenham limitações com a língua inglesa, mas que querem conhecer um pouco desse framework. Inicialmente o passo a passo está no <a href="https://github.com/jovair/nextjs.git">HEADME.md</a>, mas aos poucos pretendo
            fazer posts que facilitem os estudos.{' '}
            <a href="https://nextjs.org/learn"> Acesse os tutoriais da Next.js</a>.
          </p>
        </div>
        <div className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
            </li>
            ))}
          </ul>
        </div>
        <main className={utilStyles.main}>
          <p className={utilStyles.headingP}>
            Os links links da documentação abaixo apontam para site do <a href="https://nextjs.org">Next.js</a> e estão em inglês.
          </p>
          <div className={utilStyles.grid}>
            <a href="https://nextjs.org/docs" className={utilStyles.card}>
              <h3>Documentação &rarr;</h3>
              <p>Encontre mais informações sobre características e APIs do Next.js.</p>
            </a>

            <a href="https://nextjs.org/learn" className={utilStyles.card}>
              <h3>Aprenda &rarr;</h3>
              <p>Aprenda sobre o Next.js em um curso interatico com quizzes!</p>
            </a>

            <a href="https://github.com/zeit/next.js/tree/master/examples"
              className={utilStyles.card}>
              <h3>Exemplos &rarr;</h3>
              <p>Descrubra e implante exemplos de projetos padrão Next.js.</p>
            </a>
            <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={utilStyles.card}>
              <h3>Deploy &rarr;</h3>
              <p>
                Implante um site Next.js facilmente em uma URL pública com o Vercel.
              </p>
            </a>
          </div>
        </main>
      </section>

      </Layout>
  )
}
