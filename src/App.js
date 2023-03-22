import './App.css';
import Hero from './components/Hero/Hero';
import CollapsibleExample from './components/Navbar/Navbar';
import Seo from './components/Seo/Seo';
import Separator from './components/Separator/Separator';
import WorkProcess from './components/WorkProcess/WorkProcess';

function App() {
  return (
    <div>
      <CollapsibleExample />
      <Hero />
      <Seo />
      <Separator />
      <WorkProcess />
    </div>
  );
}

export default App;
