import {NavLink,Routes, Route} from 'react-router-dom'
import SLayed from './Slayed.png';
function Twists(){
    return(<>
        <div className='Home'>
        <NavLink className ='Home'to = '/'>
        <img src={SLayed} className='Top'alt="logo" />

        </NavLink>
        <header className='App-header'>
        <div>Some of our twist styles!</div>
        <video className='vid'src='hair/twists.mp4' controls></video>
        <video className='vid'src='hair/twists2.mp4' controls></video>
        <video className='vid'src='hair/twists3.mp4' controls></video>
        
        </header>
        </div>
        </>
        )
}
export default Twists