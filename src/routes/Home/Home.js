import Features from '../../sections/Features/Features';
import CaseStudy from '../../sections/CaseStudy/CaseStudy';
import Product from '../../sections/Product/Product';
import Projects from '../../sections/Projects/Projects';
import Clients from '../../sections/Clients/Clients';
import Footer from '../../sections/Footer/Footer';
import Why from '../../sections/Why/Why';
import Solution from '../../sections/Solution/Solution';
import How from '../../sections/How/How';
import Navbar from '../../components/Navbar/Navbar'
import '../../components/Navbar/navbar.scss'
import About from '../../sections/About/About';
import { useRef } from 'react';
import Compro from '../../sections/Compro/Compro';

const Home = () => {
  const targetSolution = useRef(null);
  const targetFeatures = useRef(null);
  const targetProducts = useRef(null);
  const targetAbout = useRef(null);
  const targetHome = useRef(null);

  const navlink = 
    [
      {
        key: 1,
        label: "Home",
        to: targetHome
      },
      {
        key: 2,
        label: "Solution",
        to: targetSolution
      },
      {
        key: 3,
        label: "Features",
        to: targetFeatures
      },
      {
        key: 4,
        label: "Products",
        to: targetProducts
      },
      {
        key: 5,
        label: "About Us",
        to: targetAbout
      },
    ]

  return (
    <>
      <Navbar navLink={navlink} />
      
      <div ref={targetHome}>
        <Compro />
      </div>

      <div>
        <Why />
      </div>
      
      <div ref={targetSolution}>
        <Solution />
      </div>

      <div>
        <How />
      </div>

      <div ref={targetAbout}>
        <About />
      </div>
      
      <div ref={targetFeatures}>
        <Features />
      </div>

      <div>
        <CaseStudy />
      </div>
      
      <div ref={targetProducts}>
        <Product />
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <Clients />
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default Home