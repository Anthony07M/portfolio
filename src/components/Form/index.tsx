import { Container, ContentInput } from "./styles";
import { MdKeyboardArrowRight } from 'react-icons/md'

export const Form = () => {
    return (
        <Container>
            <ContentInput
                data-aos="flip-left"
                data-aos-duration="1500"
            >
                <label>Email</label>
                <input type="text" placeholder="Please enter your email" />
            </ContentInput>
            <ContentInput
                data-aos="flip-right"
                data-aos-duration="1500"
            >
                <label>Phone</label>
                <input type="text" placeholder="Enter Mobile" />
            </ContentInput>
            <ContentInput
                data-aos="flip-up"
                data-aos-duration="1500"
            >
                <label>Message</label>
                <textarea cols={30} rows={30} placeholder='Enter you message'></textarea>
            </ContentInput>
            <button
                data-aos="flip-down"
                data-aos-duration="1500"
            > Submit <MdKeyboardArrowRight /></button>
        </Container>
    );
};

