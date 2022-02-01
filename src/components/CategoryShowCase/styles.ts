import styled from "styled-components";

export const Container = styled.main`
    padding: 0 10rem;

    &>h2 {
        font-size:4rem;
        padding: 3rem 3rem 3rem 0; 
    }

    &>#products-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        &>div {
            display: flex;
            gap: 1rem;
        }
    }
`