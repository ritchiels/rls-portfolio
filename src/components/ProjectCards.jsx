import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardText,
    CardTitle
} from 'reactstrap'
//import proj photo sources
import '../main.scss'

export const ProjectCards = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }} className="font-comfortaa">
            {/*ecommerce*/}
            <Card 
                style={{ 
                    backgroundColor: "#F1EDEE",
                    borderRadius: 15,
                    margin: 'auto',
                    width: '25%',
                    padding: '1em',
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" 
                }}
            >
                <CardImg />
                <CardBody>
                    <CardTitle><h3>🍳 Cook's Corner</h3></CardTitle>
                    <CardText>
                        Mock e-commerce app. Browse featured products and add items to your cart.
                    </CardText>
                    <CardFooter>
                        <Button color="secondary" outline>Source</Button>
                        <Button color="info" outline>Demo</Button>
                    </CardFooter>
                </CardBody>
            </Card>
            {/*chatbot*/}
            <Card 
                style={{ 
                    backgroundColor: "#F1EDEE",
                    borderRadius: 15,
                    margin: 'auto',
                    width: "25%",
                    padding: '1em',
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" 
                }}
            >
                <CardImg />
                <CardBody>
                    <CardTitle><h3>🤖 Buddy Bot</h3></CardTitle>
                    <CardText>
                        React chat bot made with chatscope's UI kit and OpenAI api.
                    </CardText>
                    <CardFooter>
                        <Button>Source</Button>
                        <Button>Demo</Button>
                    </CardFooter>
                </CardBody>
            </Card>
            {/*campground*/}
            <Card 
                style={{ 
                    backgroundColor: "#F1EDEE",
                    borderRadius: 15,
                    margin: 'auto',
                    width: "25%",
                    padding: '1em',
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" 
                }}
            >
                <CardImg />
                <CardBody>
                    <CardTitle><h3>🌳 Campground App</h3></CardTitle>
                    <CardText>
                        Mock camping app. Search campsites, reserve a trip, and leave a review. 
                    </CardText>
                    <CardFooter>
                        <Button>Source</Button>
                        <Button>Demo</Button>
                    </CardFooter>
                </CardBody>
            </Card>
        </div>
    )
}
