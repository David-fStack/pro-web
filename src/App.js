import './App.css';
import Hero from './components/Hero/Hero';
import CollapsibleExample from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
import Seo from './components/Seo/Seo';
import Separator from './components/Separator/Separator';

function App() {
  return (
    <div>
      <CollapsibleExample />
      <Parallax />
      <Seo />
      <Separator />
    </div>
  );
}

export default App;
