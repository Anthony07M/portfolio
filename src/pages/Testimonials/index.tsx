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
                description="Nesta seção de testemunhos, você encontrará depoimentos sinceros de pessoas com quem tive o prazer de trabalhar. São vozes autênticas que compartilham suas experiências e feedbacks sobre nossa colaboração. Cada palavra é um lembrete gratificante do impacto positivo que buscamos alcançar juntos."
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