import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Why from './routes/Why/Why';
import Solution from './routes/Solution/Solution';
import How from './routes/How/How';
import About from './routes/About/About';
import Features from './routes/Features/Features';

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <Why />

      <Solution />

      <How />

      <About />

      <Features />

      <Routes>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} /> */}
      </Routes>
    </>
  );
}

export default App;
