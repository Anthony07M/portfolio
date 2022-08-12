import styled from "styled-components";

export const Container = styled.nav`
    width: 90%;
    height: 70px;
    background: var(--black-secondary);
    border-radius: 0px 0px 8px 8px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 80px;

    svg, a {
        color: var(--grey);
    }
    
    a {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }

    a:hover {
        color: #3F8E00;
    }

    .networks {
        width: 107px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        cursor: pointer;

        svg:nth-child(2),  svg:nth-child(3) {
            margin-top: 2px;
        }
    }
`