
import './App.css';
import Navigation from './components/navigation'
import Headerq from './components/header'
import About from './components/about'
import Displayroom from './components/displayroom';
import Features from './components/Features'
import Benefit from './components/Benefit';
import GettingMessage from './components/GettingMessage'
import Conferences from './components/Conferences'
import Footer from "./components/Footer1"
function App() {
  return (
    <div className="App">
      <>
      <Navigation/>
      <Headerq/>
      <About/>
      <Displayroom/>
      <Features/>
      <Benefit/>
      <GettingMessage/>
      <Conferences/>
      <Footer/>
      </>
    </div>
  );
}

export default App;
