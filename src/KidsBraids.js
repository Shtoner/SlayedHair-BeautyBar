import {NavLink,Routes, Route} from 'react-router-dom'
import SLayed from './Slayed.png';
function KidsBraids(){
    return(<>
        <div className='Home'>
        <NavLink className ='Home'to = '/'>
        <img src={SLayed} className='Top'alt="logo" />

        </NavLink>
        <header className='App-header'>
        <div>Some of our kids' braids styles!</div>
        <video className='vid'src='hair/kidsbraids.mp4' controls></video>
        <video className='vid'src='hair/kids3.mp4' controls></video>
        <video className='vid'src='hair/kids4.mp4' controls></video>

        </header>
        </div>
        </>
        )
}
export default KidsBraids