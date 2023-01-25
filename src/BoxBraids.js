import {NavLink,Routes, Route} from 'react-router-dom'
import SLayed from './logo.jpeg';

function BoxBraids(){
    return(<>
        <div className='Home'>
        <NavLink className ='Home'to = '/'>
        <img src={SLayed} className='Top'alt="logo" />

        </NavLink>
        <header className='App-header'>
        <div>Pics of our box braids!</div>
        <video className='vid'src='hair/boxbraids.mp4' controls></video>
        <video className='vid'src='hair/boxbraids2.mp4' controls></video>
        <video className='vid'src='hair/boxbraids3.mp4' controls></video>

        </header>
        </div>
        </>
    )
}
export default BoxBraids