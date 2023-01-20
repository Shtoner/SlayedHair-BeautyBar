import {NavLink,Routes, Route} from 'react-router-dom'
import SLayed from './Slayed.png';
function FeedInBraids(){
    return(<>
        <div className='Home'>
        <NavLink className ='Home'to = '/'>
        <img src={SLayed} className='Top'alt="logo" />

        </NavLink>
        <header className='App-header'>
        <div>Pics of our feed-in braids!</div>
        <video className='vid'src='hair/feedin.mp4' controls></video>
        
        </header>
        </div>
        </>
        )
}
export default FeedInBraids