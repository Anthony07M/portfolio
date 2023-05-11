import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Title } from "../../components/Title";
import { Container } from "./styles";

export const GetInTouch = () => {
    return (
        <Container id="get_in_touch">
            <Title
                title="Get In Touch"
                description="Vamos compartilhar ideias, trocar conhecimentos e encontrar maneiras de trabalhar juntos. Aguardo com entusiasmo sua mensagem e a possibilidade de iniciar uma jornada colaborativa."
            />
            <Form/>
            <Footer/>
        </Container>
    );
};
