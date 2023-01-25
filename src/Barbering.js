import {NavLink,Routes, Route} from 'react-router-dom'
import SLayed from './Slayed.png';

function Barbering(){
    return(<>
        <div className='Home'>
        <NavLink className ='Home'to = '/'>
        <img src={SLayed} className='Top'alt="logo" />

        </NavLink>
        <header className='App-header'>
        <div>Pics of our Cutting work!</div>
        <video className='vid'src='hair/cuts2.mp4' controls></video>
        <video className='vid'src='hair/cuts3.mp4' controls></video>
        <video className='vid'src='hair/cuts.mp4' controls></video>

        </header>
        </div>
        </>
        )
}
export default Barbering