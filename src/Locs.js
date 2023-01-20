import {NavLink,Routes, Route} from 'react-router-dom'
import SLayed from './Slayed.png';

function Locs(){
    return(<>
        <div className='Home'>
        <NavLink className ='Home'to = '/'>
        <img src={SLayed} className='Top'alt="logo" />

        </NavLink>
        <header className='App-header'>
        <h1>Some of our locs styles!</h1>
        <video className='vid'src='hair/locs.mp4' controls></video>
        <video className='vid' src='hair/locs2.mp4' controls></video>
        <video className='vid' src='hair/locs3.mp4' controls></video>
        </header>
        </div>
        </>
    )
}
export default Locs