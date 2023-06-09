import styles from './Header.module.scss'
import search from './search.png'

export default function Header (){
    return(
        <header className={styles.header}>
            <h1>Space Images</h1>
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="O que você procura?"/>
                <img src={search}/>
            </div>
        </header>
    )
}