import Home from "./components/Home"
import NavBar from "./components/NavBar"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
//import SocialLinks from "./components/SocialLinks";



function App () {
  return (
    <div className="pb-12 bg-body">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
