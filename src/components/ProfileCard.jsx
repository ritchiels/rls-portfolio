import {
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardText,
    CardTitle,
}
    from 'reactstrap'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { EmailModal } from './EmailModal'
import '../main.scss'
import ProfilePic from '/src/assets/rich-prof.jpg'

export const ProfileCard = () => {

    return (
        <div style={{ display: "flex", justifyContent: "center" }} className="font-comfortaa">
            <Card
                style={{
                    backgroundColor: "#F1EDEE",
                    borderRadius: 20,
                    //consider moving all this styling to scss 
                    marginBottom: 50,
                    maxWidth: "50vh",
                    padding: '2em',
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                }}
            >
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
                    <CardText className="description">Full-Stack web developer with a focus in React and Native, as well as back-end technologies Node.js, Express, and MongoDB.</CardText>
                </CardBody>
                <CardFooter>
                    <a href="https://github.com/ritchiels" className="socials" >
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a href="#" onClick={} className="socials" >
                        <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/ritchie-simmons-060443231/" className="socials" >
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                </CardFooter>
            </Card>
            {/* modal component */}
            <EmailModal isOpen={} toggle={} />
        </div>
    )
}


