import {
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardText,
    CardTitle,
} 
from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../main.scss'
import ProfilePic from '/src/assets/rich-prof.jpg'

export const ProfileCard = () => {

  return (
    <div style={{ display: "flex", justifyContent: "center" }} className="font-comfortaa">
        <Card
            style={{ 
                backgroundColor: "#F1EDEE",
                borderRadius: 20,
                // border: "1px solid #7C7C7C", 
                marginBottom: 50,
                maxWidth: "50vh",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"  
                }}>
            <CardImg
                top
                width="100%"
                src={ProfilePic}
                alt="Profile Image"
                className="profile-pic"
            />
            <CardBody>
                <CardTitle><h2>Ritchie L. Simmons</h2></CardTitle>
                <hr />
                <CardText>Full-Stack web developer with a focus in React and Native, as well as back-end technologies Node.js, Express, and MongoDB.</CardText>
            </CardBody>
            <CardFooter>
                <a href="https://github.com/ritchiels" className="socials">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:ritchie.simmons@gmail.com" className="socials">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="https://www.linkedin.com/in/ritchie-simmons-060443231/" className="socials">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </CardFooter>
        </Card>
    </div>
  )
}
