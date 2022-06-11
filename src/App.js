import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Hero from './pages/Hero'
import Home from './pages/Home'
import ProjectExplore from './pages/ProjectEplore'
import Projects from './pages/Projects'
import Skill from './pages/Skill'

function App() {
  const location = useLocation()
  return (
    <div className='App'>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />}>
            <Route index element={<Hero />}></Route>
            <Route path='skill' element={<Skill />}></Route>
            <Route path='projects' element={<Projects />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='/project/:name' element={<ProjectExplore />}></Route>
          </Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
