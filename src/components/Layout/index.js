import { Post } from '../Post'
import { Story } from '../Story'
import { Suggestion } from '../Suggestion'
import './style.css'

export function Layout(){

    return (
        <>
            <div className='MainGrid'>
                <div className='first-column' style={{ gridArea: 'firstColumn' }}> 
                    <div className="box">
                        <Story></Story>
                    </div>

                    <div className="box" style={{margin: '30px 0px'}}> 
                        <Post></Post>
                    </div>
                </div>

                <div className="suggestionBox" style={{ gridArea: 'secondColumn' }}>
                    <Suggestion></Suggestion>
                </div>
            </div>
        </>
    )

}