// Componentes React nativos
import Head from 'next/head'
import Link from 'next/link'

// Componentes customizados no App
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

// Constante exibida no header da Home Page
const name = "Jovair Silva"

// Título do site exibido na aba do navegador
export const siteTitle = "Exemplo de website Next.js"

// Recebe o conteúdo da tag home e das páginas filhos e retorna os conteúdos com os estilos aplicados
function Layout({ children, home }) {
    return (

        // todo o conteúdo desta div é afetado por styles.container, definidos no componente layout.module.css com as dimensões de width, padding e margin. 
        <div className={styles.container}>
            <Head>
                <meta
                property="og:image"
                content={`https://og-image.now.sh/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            {/* O estilo do header vem de layout.module.css
                Tudo o que for de header deve estar na primeira parte da função
                O conteúdo do header das demais páginas deve ser colocado na segunda parte
                da função */}
            <header className={styles.header}>
                {home ? (
                <>
                    {/* Carrega a foto na página princial */}
                    <img
                    src="/images/profile.jpg"
                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                    alt={name}
                    />
                    {/* Carrega a constante name para a página principal */}
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
                ) : (
                <>
                    <Link href="/">
                    <a>
                        {/* Carrega a imagem para as páginas de post */}
                        <img
                        src="/images/profile.jpg"
                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                        alt={name}
                        />
                    </a>
                    </Link>
                        <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                    </h2>
                </>
                )}
            </header>

            
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Home</a>
                </Link>
                </div>
            )}

            <footer className={`${utilStyles.footer}`}>
            <>
                <a href="https://github.com/jovair/nextjs">
                    {/* Carrega a foto na página princial */}
                    <div>
                        <img src="/images/GitHub-Mark-32px.png" alt={name}/>
                    </div>
                    {/* Carrega a constante name para a página principal */}
                    <div>
                        <h3 className={`${utilStyles.headingP}`}>{name}</h3>
                    </div>
                </a>
            </>
            </footer>
        </div>
    )
}

export default Layout