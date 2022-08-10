import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 800;
        font-size: 34px;
        line-height: 40px;
        margin-top:80px;
        margin-bottom: 10px;
    }
    p {
        width: 570px;
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey);
        margin-bottom: 60px;
    }
`