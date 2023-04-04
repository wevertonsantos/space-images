import search from './search.png'

export default function Header (){

    return(
        <header>
            <h1>Space Images</h1>
            <div>
                <input type="text" placeholder="O que você procura?"/>
                <img src={search}/>
            </div>
        </header>
    )
}