import { Container } from "./styles";
import { GrLinkedinOption, GrGithub } from 'react-icons/gr'
import { RiInstagramFill } from 'react-icons/ri'

export const NavBar = () => {
    return (
        <Container
            data-aos="fade-down"
            data-aos-duration="2000"
        >
            <a href="/#home">Home</a>
            <a href="/#case_studies">Case Studies</a>
            <a href="/#testimonials">Testimonials</a>
            <a href="/#recent_work">Recent work</a>
            <a href="/#get_in_touch">Get In Touch</a>
            <div className="networks">
                <GrLinkedinOption onClick={() => window.open('https://linkedin.com/in/anthony07m')}/>
                <RiInstagramFill onClick={() => window.open('https://www.instagram.com/anthonyfreitas94/')}/>
                <GrGithub onClick={() => window.open('https://github.com/Anthony07M')}/>
            </div>
        </Container>
    );
};
