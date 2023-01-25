import {NavLink,Routes, Route} from 'react-router-dom'
import SLayed from './Slayed.png';
function Color(){
    return(<>
        <div className='Home'>
        <NavLink className ='Home'to = '/'>
        <img src={SLayed} className='Top'alt="logo" />

        </NavLink>
        <header className='App-header'>
        <div>Some of our color work!</div>
        <video src='hair/color.mp4' className='vid' controls></video>
        <video src='hair/color2.mp4' className='vid' controls></video>
        <video src='hair/color3.mp4' className='vid' controls></video>
        </header>
        </div>
        </>
        )
        //
}
export default Color