import './style.css'
import { FiMoreHorizontal, FiSend  } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export function Post(){

    return (
        <>
            <header className='header-post'>

                <div className='infos-post'>

                    <img className='img-header-post' src='https://github.com/maykbrito.png'></img> 

                    <p>maykbrito</p>

                </div>


                <FiMoreHorizontal></FiMoreHorizontal>

            </header>


            <div className='img-post'>
                <img src='https://github.com/maykbrito.png'></img> 
            </div>


            <div className='footer-post'>
            <IconContext.Provider value={{size: '30px'}}>  
                <section className='engagement-post'>
                    <div className='icons-1'>

                        <div className='icon'>
                            <IoMdHeartEmpty></IoMdHeartEmpty>
                        </div>

                        <div className='icon'>
                            <BsChat></BsChat>
                        </div>

                        <div className='icon'>
                            <FiSend></FiSend>
                        </div>

                    </div>

                    <div className='icon'>
                        <BsBookmark></BsBookmark>
                    </div>
                        
                </section>
            </IconContext.Provider>
                <section className='like'>
                    <span>74 Curtidas</span>
                </section>

                <div className='legenda'>
                    <p>
                        <strong>maykbrito </strong>
                        Desenvolvemos peças exclusivas para a Black Friday com descontos de até 60% OFF. Em Breve.
                    </p>
                </div>

                <div className='time-post'>
                    <time>Há 1 Hora</time>
                </div>

                <div className='comment'>

                    <div className='fake-comment'>

                        <IconContext.Provider value={{size: '25px'}}> 

                           <div className='icon'>
                               <BsEmojiSmile></BsEmojiSmile>
                           </div>

                        </IconContext.Provider>


                        <input placeholder='Faça um comentário...'></input>

                    </div>

                    <button>Publicar</button>

                </div>

            </div>
        </>
    )

}