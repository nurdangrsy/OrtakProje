import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Middle from './Components/Middle/Middle';
import Destinations from './Components/Destinations/Destinations';
import Portfolio from './Components/Portifolio/Portifolio';


function App() {
  return (
    <div>
   <Navbar />
   <Home />
   <Middle/>
   <Destinations/>
   <Portfolio/>
    </div>
  );
}

export default App;