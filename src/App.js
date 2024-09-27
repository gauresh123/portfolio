
import Contact from './cmponents/contact/Contact';
import Foot from './cmponents/footer/Foot';

import Intro from './cmponents/introduction/Intro';
import NavBar from './cmponents/navbar/NavBar';
import PortFolio from './cmponents/portfolio/PortFolio';
import Skills from './cmponents/skills/Skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Skills/>
      <PortFolio/>
      <Contact/>
      <Foot/>
    </div>
  );
}

export default App;
