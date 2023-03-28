import './App.css';
import Copyright from './components/Copyright/Copyright';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import CollapsibleExample from './components/Navbar/Navbar';
import Seo from './components/Seo/Seo';
import WorkTools from './components/WorkTools/WorkTools';
import WorkProcess from './components/WorkProcess/WorkProcess';
import Services from './components/Services/Services';
import { ContactUs } from './components/ContactUs/ContactUs';
import WhatsApp from './components/WhatsApp/WhatsApp';

function App() {
  return (
    <div>
      <WhatsApp />
      <CollapsibleExample />
      <Hero />
      <Seo />
      <WorkTools />
      <WorkProcess />
      <Services />
      <ContactUs />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
