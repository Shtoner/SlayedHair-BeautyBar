import {NavLink,Routes, Route} from 'react-router-dom'
import SLayed from './Slayed.png';
function CrochetBraids(){
    return(<>
        <div className='Home'>
        <NavLink className ='Home'to = '/'>
        <img src={SLayed} className='Top'alt="logo" />

        </NavLink>
        <header className='App-header'>
        <div>Pics of our crochet braids!</div>
        <video className='vid'src='hair/crochet.mp4' controls></video>
        <video className='vid'src='hair/crochet2.mp4' controls></video>
        <video className='vid'src='hair/crochet3.mp4' controls></video>
        
        </header>
        </div>
        </>)
}
export default CrochetBraids