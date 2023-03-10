import classes from './Hero.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Hero = (props) => {

    const navigate = useNavigate();

    // Navigate the user to the booking page
    const reserveTable = () => {

        navigate('/booking')
    }

    // Navigate back
    const  backButton = () => {
        navigate(-1)
    }

    return (
        <Container className={classes.hero}>
            <Row>
                <div>
                    <button className={classes.backButton} onClick={backButton}>Back</button>
                </div>
                <Col className={classes.company_info}>
                    <h1 className={classes.title}>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button onClick={reserveTable}>Reserve a Table</button>

                </Col>
                <Col>
                    <img className={classes.featured_food} src={'tomato-vegetable.jpg'} alt="tomato-vegetable" width={250}/>
                </Col>
            </Row>

        </Container>
    )
};

export default Hero;