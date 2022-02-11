import styled from "styled-components";

export const Container = styled.main`
    padding: 2rem 10rem;
    min-height: 91.6vh;

    h1 {
        padding: 3rem 0 1rem 1rem;
        margin-bottom: 3rem;
    }
    
    &.cartModal-open {
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: ;
            background-color: rgba(10,10,10,0.35);
            overflow: hidden;
            z-index: 3;
        }
    }
`