import styled from "styled-components";

export const Container = styled.main`
    padding: 0 10rem 8rem 10rem;

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