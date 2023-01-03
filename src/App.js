import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Why from './routes/Why/Why';

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <Why />

      <Routes>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} /> */}
      </Routes>
    </>
  );
}

export default App;
