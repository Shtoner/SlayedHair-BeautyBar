import SLayed from './Slayed.png';
import Cut1 from './Cut1.jpg'
import Cut2 from './Cut2.jpg'
import Cut3 from './Cut3.jpg'

import './App.css';

function App() {
  return (
    <div className="App">
        <img src={SLayed} className="Top" alt="logo" />
      <header className="App-header">
        <div className="text">
        <p>Services include braids, barbering, starter locs & retwists, coils, twists, silk press, rollersets, relaxers, perms, color, hilites, weaves and more.</p>
        <p><div className='slidel' style={{color:'rgb(243, 215, 57)'}}>Call Us!:</div> (304) 267-2700</p>
        <p><div className='slider'style={{color:'rgb(243, 215, 57)'}}>2 Locations:</div><div> 416 W King ST Martinsburg 25401 & 306 W Washington ST Charles Town 25414 call 4102584914</div></p>
        <p>Hours: 9AM-6PM</p>
        </div>
        <a
          className="App-link"
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

export default App;
