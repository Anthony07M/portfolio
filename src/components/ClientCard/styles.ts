import styled from "styled-components";

export const Container = styled.div`
    width: 445px;
    height: 212px;
    border-radius: 6px;
    box-sizing: border-box;
    padding-left: 30px;
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(90deg, #484848 1.24%, rgba(27, 27, 27, 0) 100%);
    

    .comment{
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: var(--grey);
        margin-top: 30px;
        margin-bottom: 30px;
        width: 409px;
    }

    .name {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: flex-end;
        text-align: center;
        margin: 0;
        margin-left: 20px;
        color: var(--white);
    }

    div {
        display: flex;
        align-items: center;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }

`