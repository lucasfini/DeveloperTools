import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Hero from './components/hero';
import About from './components/about';
import Pricing from './components/pricing';
import FAQ from './components/faq';
import Footer from './components/footer';


function App() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <Pricing/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
