import styled from "styled-components";

export const Container = styled.main`
    padding: 0 10rem 8rem 10rem;
    position: relative;

    &.cartModal-open{
        user-select: none;
        img { filter: brightness(.655) }

        .stock { filter: brightness(.675);}

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            background-color: rgba(10,10,10,0.35);
            overflow: hidden;
            z-index: 4;
        }
    }

    &>h2 {
        font-size:4rem;
        font-weight: 400;
        padding: 3rem 3rem 3rem 0; 
    }

    &>#products-list {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(3, 1fr);
    }

    & i {
        font-size: 3rem;
        color: var(--active-green);
        position: absolute;
        top: 40%;
        left: 48.7%;
        transform: translateX(-50%);
    }
`