import { Container } from "./styles";

interface ClientCardProps {
    name: string,
    imgUrl: string,
    comment: string
}

export const ClientCard = ({ name, imgUrl, comment }: ClientCardProps) => {
    return (
        <Container 
             data-aos="zoom-in"
            data-aos-duration='1500'
        >
            <p className="comment">{comment}</p>
            <div>
                <img src={imgUrl} alt={name} />
                <p className="name">{name}</p>
            </div>
        </Container>
    );
};