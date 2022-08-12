import { WorkDynamic } from "../../components/WorkDynamic";
import { Container } from "./styles"
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import { useId } from "react";
import { Title } from "../../components/Title";

export const CasesStudies = () => {
    const id = useId()
    return (
        <Container id="case_studies">
            <Title
                title="Case Studies"
                description="Solving user business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                variant="black"
            />
            <WorkDynamic
                key={id}
                type="Fintech"
                name="Work name here"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
                imgUrl={img1}
            />
             <WorkDynamic
                key={id}
                type="Fintech"
                name="Work name here"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
                imgUrl={img2}
                direction='left'
                variant="blue"
            />
             <WorkDynamic
                key={id}
                type="Fintech"
                name="Work name here"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna."
                imgUrl={img3}
                variant='green'
            />
        </Container>
    );
};

