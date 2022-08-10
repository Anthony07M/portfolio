import styled from "styled-components";

export type VariantType = 'blue' | 'yellow' | 'green'
export type DirectionType = 'righ' | 'left'

export interface WorkDynamicPropsColor {
    variant: VariantType,
    direction: DirectionType
}

export const Container = styled.div<WorkDynamicPropsColor>`
    width: 892px;
    height: 300px;
    display: flex;
    flex-direction: ${({ direction }) => direction === 'left' ? 'row-reverse': 'row'};
    margin-bottom: 80px;


    .details {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 50%;
        padding-left: ${({ direction }) => direction === 'left' && '31px'};

        span {
            color: ${({ variant }) =>  variant === 'yellow' ? 'var(--yellow)': variant === 'green'? 'var(--green)': 'var(--blue)'};
            padding: 5px;
            width: 82px;
            border-radius: 15px;
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 24px;
            background: ${({variant}) => variant === 'yellow' ? '#FFF6E9': variant === 'green' ? '#E0FFF8': '#D0E6FF'} ;
            border: 60px;
        }

        h3 {
            color: var(--black);
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 800;
            font-size: 24px;
            line-height: 28px;
        }

        p {
            width: 421px;
            color: var(--grey);
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
        }

        button {
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            background: ${({ variant }) =>  variant === 'yellow' ? 'var(--yellow)': variant === 'green'? 'var(--green)': 'var(--blue)'};
            color: var(--white);
            padding: 15px;
            width: 190px;
            border-radius: 5px;
        }
    }

    .figure {
        width: 50%;
        border-radius: 5px;
        img {
            width: 100%;
            height: 100%;
        }
    }
`;