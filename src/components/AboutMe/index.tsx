import { Container } from "./styles";

interface AboutMeProps {
    name: string,
    description: string,
    avatarUrl: string,
}
export const AboutMe = ({ name, description, avatarUrl }: AboutMeProps) => {
    return (
        <Container>
            <div className="content-information">
                <h1>{name}</h1>
                <p>{description}</p>
                <button> Let’s get started </button>
            </div>
            <div className="content-img">
                <img src={avatarUrl} alt={name} />
            </div>
        </Container>
    );
};
