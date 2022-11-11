import { Container, Tab, Col, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from '../assets/img/projImg1.PNG';
import projImg2 from '../assets/img/projImg2.PNG';
import projImg3 from '../assets/img/projImg3.PNG';
import projImg4 from '../assets/img/projImg4.PNG';
import projImg5 from '../assets/img/projImg5.PNG';
import projImg6 from '../assets/img/projImg6.PNG';
export const Projects = () => {

    const projects = [
        {
            title: "Email services page",
            description: "I did the design && development",
            imgUrl: projImg1,
            link: "https://www.micorreo.pro/",
        
        },
        {
            title: "Engineering company in Brazil",
            description: "I developed",
            imgUrl: projImg2,
            link: "https://pro-systemas.com.br/",
        
        },
        {
            title: "Electrical engineering company",
            description: "Desgin && Development",
            imgUrl: projImg3,
            link: "https://www.primontech.com.br/",
        
        },
        {
            title: "Swing chair shop",
            description: "I did the design && development",
            imgUrl: projImg4,
            link: "https://www.merlindesign.cl/",
        
        },
        {
            title: "Industrial laundry company ",
            description: "I developed",
            imgUrl: projImg5,
            link: "https://dp-clean.cl/",
        
        },
        {
            title: "Radio company",
            description: "I did the design && development",
            imgUrl: projImg6,
            link: "https://radiopuente.com/index.php",
        
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2 id="projects">Projects</h2>
                        <p>These are my projects, most of them were made for clients that I have had during
my time working as a freelancer and also on the recommendation of my clients.</p>
                         <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-contente-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Major projects</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                                
                                            )
                                            
                                        })  
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={''} />
        </section>
    );
}