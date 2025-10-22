import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
