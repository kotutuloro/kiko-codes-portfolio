
import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import Footer from './Footer'
import Header from './Header'
import Projects from './Projects'
import Section from './Section'

function App() {
  return (
    <div style={{ clipPath: "border-box" }} className='border-3 border-neutral-950 rounded-3xl lg:max-w-screen-lg md:max-w-screen-md mx-auto'>
      <Header />
      <main>
        <Section id="about" ChildComponent={About} />
        <Section id="experience" ChildComponent={Experience} />
        <Section id="projects" ChildComponent={Projects} />
        <Section id="contact" ChildComponent={Contact} />
      </main>
      <Footer />
    </div>
  )
}

export default App
