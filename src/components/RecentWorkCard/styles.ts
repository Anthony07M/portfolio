import styled from "styled-components";

export const Container = styled.div`
    width: 445px;
    height: 494px;

    img {
        width: 100%;
        height: 300px;
        border-radius: 5px;
    }

    .details {
        h3 {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 800;
            font-size: 24px;
            line-height: 28px;
            color: var(--black);
            margin-top: 40px;
            margin-bottom: 20px;
        }

        p {
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            width: 421px;
            margin-bottom: 20px;
        }

        button {
            background: var(--green-button);
            color: var(--white);
            border: 1px solid #62BA1B;
            box-shadow: 0px 8px 30px rgba(63, 142, 0, 0.3);
            border-radius: 4px;
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            padding: 5px;
            width: 140px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 38px;
            svg {
                font-weight: 700;
                font-size: 1.45rem;
            }
        }
    }
`