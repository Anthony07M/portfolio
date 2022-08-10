import { Container, ContentInput } from "./styles";
import { MdKeyboardArrowRight } from 'react-icons/md'

export const Form = () => {
    return (
        <Container>
            <ContentInput>
                <label>Email</label>
                <input type="text" placeholder="Please enter your email" />
            </ContentInput>
            <ContentInput>
                <label>Phone</label>
                <input type="text" placeholder="Enter Mobile" />
            </ContentInput>
            <ContentInput>
                <label>Message</label>
                <textarea cols={30} rows={30} placeholder='Enter you message'></textarea>
            </ContentInput>
            <button> Submit <MdKeyboardArrowRight/></button>
        </Container>
    );
};

