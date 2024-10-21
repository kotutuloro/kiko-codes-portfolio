import About from './About'
import './App.css'
import Contact from './Contact'
import Header from './Header'
import Section from './Section'

function App() {
  return (
    <div className='lg:max-w-screen-lg md:max-w-screen-md mx-auto'>
      <Header />
      <main>
        <Section id="about" ChildComponent={About} />
        <Section id="contact" ChildComponent={Contact} />
      </main>
    </div>
  )
}

export default App
