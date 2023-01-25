import {NavLink,Routes, Route} from 'react-router-dom'
import SLayed from './logo.jpeg';

function Perms(){
    return(<>
        <div className='Home'>
        <NavLink className ='Home'to = '/'>
        <img src={SLayed} className='Top'alt="logo" />

        </NavLink>
        <header className='App-header'>
        <div>Pics of our perms!</div>
        </header>
        </div>
        </>
        )
}
export default Perms