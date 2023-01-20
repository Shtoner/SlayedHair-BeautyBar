import {NavLink,Routes, Route} from 'react-router-dom'
import SLayed from './Slayed.png';
function NatBraids(){
    return(<>
        <div className='Home'>
        <NavLink className ='Home'to = '/'>
        <img src={SLayed} className='Top'alt="logo" />

        </NavLink>
        <header className='App-header'>
        <div>Some of our natural braids!</div>
        <video className='vid'src='hair/natbraids.mp4' controls></video>
        <video className='vid'src='hair/natbraids2.mp4' controls></video>
        <video className='vid'src='hair/natbraids3.mp4' controls></video>

        </header>
        </div>
        </>
        )
}
export default NatBraids