import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 90%;
    right: -1rem;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    width: auto;
    height: auto;
    z-index: 4;

    ul {
        list-style: none;
        background: #fff;
        font-size: 1.2rem;

        li {
            width: 6.5rem;
            height: 3rem;
            padding: .8rem .8rem; 
        }
    }
`