import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Title } from "../../components/Title";
import { Container } from "./styles";

export const GetInTouch = () => {
    return (
        <Container id="get_in_touch">
            <Title
                title="Get In Touch"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            />
            <Form/>
            <Footer/>
        </Container>
    );
};
