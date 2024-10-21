import About from './About'
import './App.css'
import Header from './Header'
import Section from './Section'

function App() {
  return (
    <div className='lg:max-w-screen-lg md:max-w-screen-md mx-auto'>
      <Header />
      <main>
        <Section ChildComponent={About} />
        {/* <About />
        <Projects />
        <Contact /> */}
      </main>
    </div>
  )
}

export default App
