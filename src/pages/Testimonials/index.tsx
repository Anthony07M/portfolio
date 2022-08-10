import { useId } from "react";
import { ClientCard } from "../../components/ClientCard";
import { Title } from "../../components/Title";
import { Container } from "./styles";

export const Testimonials = () => {
    const id = useId()
    return (
        <Container id="testimonials">
            <Title
                title="Testimonials"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <div className="content">
                <ClientCard
                    key={id}
                    name="Aldair Azevedo"
                    comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                    imgUrl="https://github.com/AldairAzevedo.png"
                />
                <ClientCard
                    key={id}
                    name="Douglas Filipe"
                    comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                    imgUrl="https://github.com/douglas-filipe.png"
                />
                <ClientCard
                    key={id}
                    name="Anthony Freitas"
                    comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                    imgUrl="https://github.com/anthony07m.png"
                />
                <ClientCard
                    key={id}
                    name="Thiago Carlos"
                    comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                    imgUrl="https://github.com/ThiagoCarlosAlves.png"
                />
            </div>
        </Container>
    );
}