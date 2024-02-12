import './App.css'
import MyPhoto from './components/avatar'
import Intro from './components/intro'
import SkillSet from './components/skillset'

function App() {

  return (
    <>
      <div className='wrap-border'>
        <MyPhoto/>
        <Intro/>
        <SkillSet/>
      </div>
    </>
  )
}

export default App
