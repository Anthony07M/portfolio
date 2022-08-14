import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .content {
        display: flex;
        justify-content: center;
        justify-content: space-evenly;
        gap: 30px;
        margin-bottom: 79px;
    }


    @media (min-width: 1400px) {
        .content{
            width: 70%;
            height: 100vh;
        }
    }
`;