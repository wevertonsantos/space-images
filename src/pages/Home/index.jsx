import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from './Home.module.scss'
import banner from './banner.png'

export default function Home(){
    return(
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço" />
                    </div>
                </section>
            </main>
        </>
    )
}