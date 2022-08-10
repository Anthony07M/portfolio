import { WorkDynamic } from "../../components/WorkDynamic";
import { Container } from "./styles"
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import { useId, useRef } from "react";
import { useInView } from 'framer-motion'

export const CasesStudies = () => {
    const id = useId()
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    return (
        <Container id="case_studies" ref={ref}>
            <div
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
            <h2>Case Studies</h2>
            <p>Solving user business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                </div>
        </Container>
    );
};

