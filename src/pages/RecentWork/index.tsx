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
                description="Solving user  business problems since last 15 years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua "
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
