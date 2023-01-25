import SLayed from './logo.jpeg';
import Cut1 from './Cut1.jpg'
import Cut2 from './Cut2.jpg'
import Cut3 from './Cut3.jpg'
import {NavLink,Routes, Route} from 'react-router-dom'
import Locs from './Locs'
import Barbering from './Barbering'
import BoxBraids from './BoxBraids'
import NatBraids from './NaturalBraids'
import FeedInBraids from './FeedInBraids'
import CrochetBraids from './CrochetBraids'
import KidsBraids from './KidsBraids'
import Coils from './Coils'
import Color from './Color'
import Hilites from './Hilites'
import Perms from './Perms'
import RollerSets from './RollerSets'
import SilkPress from './SilkPress'
import Twists from './Twists'
import Weaves from './Weaves'
import './App.css';



const Main= ()=>(
  <Routes>
    <Route  path='/' element={<Home/>}></Route>
    <Route  path='/Barbering' element={<Barbering/>}></Route>
    <Route  path='/Coils' element={<Coils/>}></Route>
    <Route  path='/Locs' element={<Locs/>}></Route>
    <Route  path='/Twists' element={<Twists/>}></Route>
    <Route  path='/SilkPress' element={<SilkPress/>}></Route>
    <Route  path='/RollerSets' element={<RollerSets/>}></Route>
    <Route  path='/Perms' element={<Perms/>}></Route>
    <Route  path='/Color' element={<Color/>}></Route>
    <Route  path='/Hilites' element={<Hilites/>}></Route>
    <Route  path='/Weaves' element={<Weaves/>}></Route>
    <Route  path='/BoxBraids' element={<BoxBraids/>}></Route>
    <Route  path='/FeedInBraids' element={<FeedInBraids/>}></Route>
    <Route  path='/NatBraids' element={<NatBraids/>}></Route>
    <Route  path='/CrochetBraids' element={<CrochetBraids/>}></Route>
    <Route  path='/KidsBraids' element={<KidsBraids/>}></Route>
  </Routes>
)

const About= ()=>(

    <div>ahsdsf
    </div>
)

function Home(){
  return(
    <div className="Home">
        <img src={SLayed} className="Top" alt="logo" />
      <header className="App-header">
<p><div className='slidel' >Call Us!:</div> (304) 267-2700</p>
      <div className="text">
        <p>Services include 
      <li className='linav'><NavLink to = '/BoxBraids'>Box Braids,</NavLink></li>
      <li className='linav'><NavLink to = '/NatBraids'>Natural Braids,</NavLink></li>
      <li className='linav'><NavLink to = '/FeedInBraids'>Feed-In Braids,</NavLink></li>
      <li className='linav'><NavLink to = '/CrochetBraids'>Crochet Braids,</NavLink></li>
      <li className='linav'><NavLink to = '/KidsBraids'>Kids' Braids,</NavLink></li>
      <li className='linav'><NavLink to = '/Barbering'>Haircuts & Barbering,</NavLink></li>
      <li className='linav'><NavLink to = '/Locs'>Starter Locs And Retwists,</NavLink></li>
      <li className='linav'><NavLink to = '/Twists'>Twists,</NavLink></li>
      <li className='linav'><NavLink to = '/SilkPress'>Silk Press,</NavLink></li>
          
      <li className='linav'><NavLink to = '/Color'>Color,</NavLink></li>
      <li className='linav'>Roller Sets,</li>
      <li className='linav'>Perms,</li>
      <li className='linav'>Coils,</li>
          
          
      <li className='linav'>Hilites,</li>
      <li className='linav'>Weaves,</li>
          <li className='linav'>and more.</li></p>
        <p><div className='slider'>2 Locations:</div><div> 416 W King ST <a href='https://goo.gl/maps/qprkW5h49uBy3iRUA'>Martinsburg</a> 25401 & 306 W Washington ST <a href='https://goo.gl/maps/3txL1kVio9r59TFs8'>Charles Town</a> 25414 call 4102584914</div></p>
        <p>Hours: 9AM-6PM</p>
      </div>
      <a
          className="slidea"
          href="https://www.instagram.com/slayedhairandbeautybar/"
          target="_blank"
          rel="noopener noreferrer"
          >
          Check out our Instagram!
      </a>
        <br></br>
        <img src={Cut1} className='exImage'></img>
        <img src={Cut2} className='exImage'></img>
        <img src={Cut3} className='exImage'></img>

      </header>
    </div>
  );
}


function App(){
  return(
  <div className='App'>
  {/* <Nav/> */}
  <Main/>
  </div>
  )
}
export default App;
