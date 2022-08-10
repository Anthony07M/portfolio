import { AboutMe } from "../../components/AboutMe";
import { NavBar } from "../../components/NavBar";
import { WorkedWith } from "../../components/WorkedWith";
import { Container } from "./styles";

export const Home = () => {
    return (
        <Container id="home">
            <NavBar />
            <AboutMe
                name="Anthony Freitas"
                description="Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                avatarUrl="https://github.com/anthony07m.png"
            />
            <WorkedWith
                works={[{ name: 'Eunerd'}, { name: 'Eunerd'}, { name: 'Eunerd'}, { name: 'Eunerd'}, { name: 'Eunerd'}]}
            />
        </Container>
    );
}