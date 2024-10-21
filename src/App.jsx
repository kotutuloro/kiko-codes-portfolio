import './App.css'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import Projects from './Projects'
import Section from './Section'

function App() {
  return (
    <div className='lg:max-w-screen-lg md:max-w-screen-md mx-auto'>
      <Header />
      <main>
        <Section id="about" ChildComponent={About} />
        <Section id="projects" ChildComponent={Projects} />
        <Section id="contact" ChildComponent={Contact} />
      </main>
    </div>
  )
}

export default App
