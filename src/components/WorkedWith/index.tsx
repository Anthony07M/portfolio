import { Container, Work } from "./styles";
import { useId } from 'react'

type WorkType = {
    name: string,
    logoUrl?: string,
}

interface WorledWithProps {
    works: WorkType[]
}

export const WorkedWith = ({ works }: WorledWithProps) => {

    const id = useId()

    return (
        <Container>
            <p>Worked with</p>
            <ul>
                {works.map((work) => <Work key={id}>{work.name}</Work>)}
            </ul>
        </Container>
    );
};
