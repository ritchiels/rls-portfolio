import { ProfileCard } from './components/ProfileCard'
import { ProjectCards } from './components/ProjectCards'
import { Container } from 'reactstrap'
import GitHubCalendar from 'react-github-calendar'
import './fonts/Comfortaa/static/Comfortaa-Regular.ttf'
import './App.css'
import './main.scss'

function App() {

  return (
    <>
        <Container>
            <ProfileCard />
            <div style={{ maxWidth: '600px', overflowX: 'auto' }}>
                {/* <GitHubCalendar username="ritchiels" /> */}
            </div>
            <br />
            <ProjectCards />
        </Container>
    </>
  )
}

export default App

//todo: add project cards
//todo: add loading spinner for github calendar component
//todo: add dark mode toggler, animate icon
