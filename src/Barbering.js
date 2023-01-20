import {NavLink,Routes, Route} from 'react-router-dom'
import SLayed from './Slayed.png';

function Barbering(){
    return(<>
        <div className='Home'>
        <NavLink className ='Home'to = '/'>
        <img src={SLayed} className='Top'alt="logo" />

        </NavLink>
        <header className='App-header'>
        <div>Pics of our Barbering work!</div>
        </header>
        </div>
        </>
        )
}
export default Barbering