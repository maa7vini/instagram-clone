import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore} from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'

import { IconContext } from 'react-icons'

import './style.css'

export function Header(){

    return(
        <header className="header">

            <div className="container">
                
                <img className='logo' src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>

                <div className="input-fake">
                <IconContext.Provider value={{ color: '#8e8e8e' }}>  
                    <AiOutlineSearch></AiOutlineSearch>
                </IconContext.Provider>

                    <input placeholder='Pesquisar'></input>
                </div>

                <div className='menu-icons'>
                    <IconContext.Provider value={{ size: '26px' }}> 
                    <div>
                        <AiFillHome></AiFillHome>
                    </div>

                    <div>
                        <RiMessengerLine></RiMessengerLine>
                    </div>

                    <div>
                        <BsPlusSquare></BsPlusSquare>
                    </div>

                    <div>
                        <MdOutlineExplore></MdOutlineExplore>
                    </div>

                    <div>
                        <FiHeart></FiHeart>
                    </div>  
                        
                    </IconContext.Provider>

                    <img className='img-user' src='https://avatars.githubusercontent.com/u/118569888?s=400&u=32f75da505ae1018651fe1081354c40a2734de65&v=4'></img>
                </div>

            </div>

        </header>
    )

}