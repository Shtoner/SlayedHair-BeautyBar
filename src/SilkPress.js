import {NavLink,Routes, Route} from 'react-router-dom'
import SLayed from './logo.jpeg';

function SilkPress(){
    return(<>
        <div className='Home'>
        <NavLink className ='Home'to = '/'>
        <img src={SLayed} className='Top'alt="logo" />

        </NavLink>
        <header className='App-header'>
        <div>Some of our silk press work!</div>
        <video className='vid'src='hair/silkpress.mp4' controls></video>
        <video className='vid'src='hair/silkpress2.mp4' controls></video>
        <video className='vid'src='hair/silkpress3.mp4' controls></video>

        </header>
        </div>
        </>
        )
}
export default SilkPress