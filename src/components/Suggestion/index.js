import { useEffect, useState } from 'react'
import './style.css'

export function Suggestion(){


    const [suggestions, setSuggestions] = useState([])

    useEffect(() => [
        fetch('https://api.github.com/users/gabrieldiass/followers').then((response) => {
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })
        .catch((err) => {
            throw new Error(err)
        })
    ], [])


    return(
        <div className='container-suggestion'>
            <div className="header-suggestion">
               
               <img className='header-suggestion-img' src="https://avatars.githubusercontent.com/u/118569888?s=400&u=32f75da505ae1018651fe1081354c40a2734de65&v=4"></img> 

                <div className="user-infos-suggestion">

                    <div className="infos">
                        <span>maa7vini</span>

                        <p>Matheus Vinicius</p>
                    </div>


                    <button className='switch'>Mudar</button>
                </div>

            </div>


            <div className='header-main-suggestion'>


                <p>Sugestões para você</p>


                <span>Ver tudo</span>


            </div>


            <div className='users-suggestion'>  

                {suggestions.map((suggestion, key) => (

                    <div className='infos-suggestions' key={key}>

                        <img src={`https://github.com/${suggestion.login}.png`}></img>  

                        <div className='info-suggestion'>

                            <span>{suggestion.login}</span> 
                            <p>Seguido por filipedechamps</p>

                        </div>

                        <button className='follow'>Seguir</button>

                    </div>

                ) )} 

                <footer className='footer-suggestion'>

                    <p>
                        Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; 
                        Privacidade &bull; Termos &bull; Localizações &bull; Principais contas 
                        &bull; Hashtags &bull; Idioma
                    </p>

                    <p>
                        &copy; 2023 INSTAGRAM FROM META
                    </p>
                </footer>

            </div>
        </div>
    )

}