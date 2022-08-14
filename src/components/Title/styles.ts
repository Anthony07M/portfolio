import styled from "styled-components";

export type VariantType = 'black' | 'white';

interface ContainerProps {
    variant: VariantType
}

export const Container = styled.div<ContainerProps>`
    h2 {
        margin-top:80px;
        margin-bottom: 10px;
        color: ${({ variant }) => variant === 'white' ? 'var(--white)': 'var(--black)'} ;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 800;
        font-size: 34px;
        line-height: 40px;
        text-align: center;
    }

    p {
        color: var(--grey);
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        width: 570px;
        margin-bottom: 60px;
        text-align: center;
    }
`