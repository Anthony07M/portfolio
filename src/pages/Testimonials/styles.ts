import styled from "styled-components";

export const Container = styled.section`
    background: var(--black);
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 62px;
        margin-bottom: 80px;
    }

    @media (min-width: 1400px) {
            height: 100vh;
    }
`