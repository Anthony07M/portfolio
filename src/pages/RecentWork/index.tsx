import { RecentWorkCard } from "../../components/RecentWorkCard";
import { Title } from "../../components/Title";
import { Container } from "./styles";
import job1 from '../../assets/images/job1.png'
import job2 from '../../assets/images/job2.png'
import { useId } from "react";

export const RecentWork = () => {
    const id = useId()
    return (
        <Container id="recent_work">
            <Title
                title="Recent Work"
                description="Nesta seção de trabalhos recentes, você terá um vislumbre dos projetos mais recentes nos quais estive envolvido. Aqui, você encontrará exemplos frescos de minha abordagem criativa, estratégias inovadoras e resultados de qualidade. Cada projeto é uma oportunidade de superar expectativas e demonstrar meu compromisso com a excelência."
                variant='black'
            />
            <div className="content">
                <RecentWorkCard
                    key={id}
                    name="Work name here"
                    description="Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
                    imgUrl={job1}
                />
                <RecentWorkCard
                    key={id}
                    name="Work name here"
                    description="Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
                    imgUrl={job2}
                />
            </div>
        </Container>

    );
};
