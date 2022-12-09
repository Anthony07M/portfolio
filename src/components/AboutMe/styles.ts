import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    h1 {
        color: var(--white);
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 800;
        font-size: 44px;
        line-height: 52px;
        padding: 10px 0px;
        gap: 10px;
        margin-bottom: 10px;
    }

    p {
        color: var(--grey);
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 30px;
    }

    button {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        background: #3F8E00;
        border: 1px solid #62BA1B;
        box-shadow: 0px 8px 30px rgba(63, 142, 0, 0.5);
        border-radius: 4px;
        padding: 21px 64px;
        gap: 10px;
        width: 307px;
        height: 63px;
        color: var(--white);
    }

    .content-information {
        width: 538px;
    }

    .content-img {
        width: 350px;
        height: 350px;
        border-radius: 50%;
        padding: 4px;
        border: 2px solid var(--grey);

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }

    }

    @media (min-width: 1400px) {
        & {
            justify-content: space-around;
            margin-top: 7rem;

            .content-img {
                width: 450px;
                height: 450px;
            }

            .content-information {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                height: 350px;

                p {
                    font-size: 16px;
                }

                h1 {
                    font-size: 55px;
                }
            }
        }
    }
`;
