import { Container, VariantType } from "./styles";


interface TitleProps {
    title: string,
    description: string,
    variant?: VariantType,
}
export const Title = ({ title, description, variant='white' }: TitleProps) => {
    return (
        <Container variant={variant}>
            <h2>{title}</h2>
            <p>{description}</p>
        </Container>
    );
};
