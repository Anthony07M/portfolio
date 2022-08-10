import { Link } from "react-router-dom";
import { Container } from "./styles";
import { GrLinkedinOption } from 'react-icons/gr'
import { RiInstagramFill } from 'react-icons/ri'
import { BsTwitter } from 'react-icons/bs'

export const NavBar = () => {
    return (
        <Container>
            <a href="/#home">Home</a>
            <a href="/#case_studies">Case Studies</a>
            <a href="/#testimonials">Testimonials</a>
            <a href="/#recent_work">Recent work</a>
            <a href="/#get_in_touch">Get In Touch</a>
            <div className="networks">
                <GrLinkedinOption />
                <RiInstagramFill />
                <BsTwitter />
            </div>
        </Container>
    );
};
