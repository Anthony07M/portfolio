import { Container, DirectionType, VariantType } from "./styles";

interface WorkDynamicProps {
    type: string,
    name: string,
    description: string,
    imgUrl: string,
    variant?: VariantType,
    direction?: DirectionType
}

export const WorkDynamic = ({ name, description, type, imgUrl, direction = 'righ', variant = 'yellow' }: WorkDynamicProps) => {
    return (
        <Container direction={direction} variant={variant}>
            <div
                className="details"
                data-aos={direction === "left" ? "fade-left" : "fade-right"}
                data-aos-duration="1500"
            >
                <span>{type}</span>
                <h3>{name}</h3>
                <p>{description}</p>
                <button>View case study</button>
            </div>
            <div
                className="figure"
                data-aos={direction === "left" ? "zoom-in-right" : "zoom-in-left"}
                data-aos-duration="1500"
            >
                <img src={imgUrl} alt={name} />
            </div>
        </Container>
    );
};