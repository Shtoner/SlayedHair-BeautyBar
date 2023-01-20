import {NavLink,Routes, Route} from 'react-router-dom'
import SLayed from './Slayed.png';
function BoxBraids(){
    return(<>
        <div className='Home'>
        <NavLink className ='Home'to = '/'>
        <img src={SLayed} className='Top'alt="logo" />

        </NavLink>
        <header className='App-header'>
        <div>Pics of our box braids!</div>
        </header>
        </div>
        </>
    )
}
export default BoxBraids