import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
function App() {
  return (
        <div className="container">
            <Navbar />
            <About />
            <Interests />
            <Footer />
        </div>
  );
}

export default App;
