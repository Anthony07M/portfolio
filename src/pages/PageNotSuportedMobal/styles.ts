import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    background: var(--black);
    color: var(--white);
    
    h1, p{
        font-family: 'IBM Plex Mono';
        text-align: center;
    }

    h1 {
        font-size: 20px;
        color: var(--green-button);
    }

    p {
        font-size: 20px;
        width: 50%;
        color: var(--grey);
    }
    
    @media (min-width: 720px) {
        display: none;
    }
`