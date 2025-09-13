import Home from './Components/Pages/Home/home';
import Navbar from './Components/Navbar/nav';
import Intro from './Components/Pages/Portfolio-intro/intro';
import AboutPage from './Components/Pages/About/about';
import Skills from './Components/Pages/Skills/skills';
import Portfolio from './Components/Pages/Portfolios/portfolio';
import ContactPage from './Components/Pages/Contact/contact';
import FooterPage from './Components/Pages/Footer/footer';
import './App.css'
function App() {


  return (
    <div className="App">
      <Navbar />
      <Home />
      <Intro />
      <div className="container">
        <AboutPage />
        <Skills />
      </div>
      <Portfolio />
      <div className="container">
        <ContactPage />
      </div>
      <FooterPage />
    </div>
  );
}

export default App;
