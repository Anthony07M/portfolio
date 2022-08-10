import styled from "styled-components";

export const Container = styled.form`

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px 24px;
        width: 350px;
        height: 50px;
        left: calc(50% - 350px/2);
        top: 542px;
        background: #3F8E00;
        border: 1px solid #62BA1B;
        box-shadow: 0px 8px 30px rgba(63, 142, 0, 0.3);
        border-radius: 4px;
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: var(--white);
        
        svg {
            font-size: 1.20rem;
        }
    }

`

export const ContentInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    width: 350px;
    margin-bottom: 20px;

    label {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color:var(--white) ;
    }

    input, textarea {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 21px;
        box-sizing: border-box;


        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 12px;
        gap: 12px;

        width: 350px;
        height: 40px;

        background: #F8F8F8;
        border: 1px solid #D8D8D8;
        border-radius: 4px;
    }

    textarea{
        resize: none;
        height: 120px;
    }
`