import { AboutMe } from "../../components/AboutMe";
import { NavBar } from "../../components/NavBar";
import { WorkedWith } from "../../components/WorkedWith";
import { workedWith } from "../../utils";
import { Container } from "./styles";

export const Home = () => {
    return (
        <Container id="home">
            <NavBar />
            <AboutMe
                name="Anthony Freitas"
                description="Seja bem-vindo ao meu portfólio, um espaço onde a criatividade e a dedicação se encontram para contar histórias e exibir minha jornada profissional. Sou apaixonado por desafios e movido pela busca constante de crescimento pessoal e profissional. "
                avatarUrl="https://github.com/anthony07m.png"
            />
            <WorkedWith
                works={workedWith}
            />
        </Container>
    );
}