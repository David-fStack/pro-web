import './App.css';
import Copyright from './components/Copyright/Copyright';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import CollapsibleExample from './components/Navbar/Navbar';
import Seo from './components/Seo/Seo';
import WorkTools from './components/WorkTools/WorkTools';
import WorkProcess from './components/WorkProcess/WorkProcess';

function App() {
  return (
    <div>
      <CollapsibleExample />
      <Hero />
      <Seo />
      <WorkTools />
      <WorkProcess />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
