import { Container, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import percent1 from '../assets/img/percente90.png';
import percent2 from '../assets/img/percente80.png';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export const Skills = () => {
    
 return (


    <section className="skill">
        <Container>
            <Col>
                <div className="skill-bx">
                    <h2 id="skills">
                        Skills
                    </h2>
                    <p>
                    I am primarily self-taught. I have dedicated a significant amount of time to studying and creating applications and websites for personal projects. However, I am eager to deepen my knowledge and turn this passion into my profession and way of life. I have a genuine love for development and constantly strive to expand my skill set by learning new things that can address real-world problems. It's a pleasure to make your acquaintance.                    </p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                        <img src={percent1} />
                        <h5>Web Development</h5>
                    </div>
                    <div className="item">
                        <img src={percent2} />
                        <h5>Mobile Development</h5>
                    </div>
                    <div className="item">
                        <img src={percent1} />
                        <h5>Web Design</h5>
                    </div>
                </Carousel>
                </div>
            </Col>
        </Container>
    </section>


        
    );
 }
