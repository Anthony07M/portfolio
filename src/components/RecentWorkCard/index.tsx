import { MdKeyboardArrowRight } from 'react-icons/md'
import { Container } from './styles';

interface RecentWorkCardProps {
    name: string,
    description: string,
    imgUrl: string,
}

export const RecentWorkCard = ({ name, description, imgUrl }: RecentWorkCardProps) => {
    return (
        <Container
            data-aos="zoom-in-up"
            data-aos-duration="1500"
        >
            <img src={imgUrl} alt={name} />
            <div className="details">
                <h3>{name}</h3>
                <p>{description}</p>
                <button
                    data-aos="flip-up"
                    data-aos-duration="1100"
                >Know More <MdKeyboardArrowRight /></button>
            </div>
        </Container>
    );
};