import styled from "styled-components";

export const Container = styled.div`
    margin-top: 40px;
    color: var(--white);
    padding-left: 10rem;

    ul {
        display: flex;
    }
    
    p {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 20px;
    }

    @media (min-width: 1400px) { 
        margin-top: 8rem;
        padding-left: 14rem;
    }
    `

export const Work = styled.li`
    font-family: 'IBM Plex Mono';
    width: 160px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey);
    background: var(--black);
    border: 1px solid var(--grey);
    border-radius: 10px;
    margin-right: 30px;
    padding: 0 10px;
`