import Contact from "./cmponents/contact/Contact";
import Foot from "./cmponents/footer/Foot";

import Intro from "./cmponents/introduction/Intro";
import NavBar from "./cmponents/navbar/NavBar";
import PortFolio from "./cmponents/portfolio/PortFolio";
import Skills from "./cmponents/skills/Skills";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />

      <NavBar />
      <Intro />
      <Skills />
      <PortFolio />
      <Contact />
      <Foot />
    </div>
  );
}

export default App;
