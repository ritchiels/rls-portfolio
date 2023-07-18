import {
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardText,
    CardTitle,
} 
from 'reactstrap'
import '../main.scss'
import ProfilePic from '/src/assets/rich-prof.jpg'

export const ProfileCard = () => {

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
            style={{ 
                backgroundColor: "#93B7BE",
                borderRadius: 20,
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
                <CardText>description</CardText>
            </CardBody>
            <CardFooter>
            spot for socials - github, email(modal), linkedin, sandbox for project demos?
            </CardFooter>
        </Card>
    </div>
  )
}

// esbuild app.js --bundle --loader:.js=jsx