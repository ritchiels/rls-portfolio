import { ProfileCard } from './components/ProfileCard'
import { Container, Col, Navbar, Row } from 'reactstrap'
import GitHubCalendar from 'react-github-calendar'
import './App.css'
import './main.scss'

function App() {

  return (
    <>
        <Container>
            <ProfileCard />
            <br></br>
            <GitHubCalendar username="ritchiels" />
        </Container>
    </>
  )
}

export default App

