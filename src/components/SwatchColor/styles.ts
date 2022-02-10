import styled from "styled-components";

export const Container = styled.span`
    padding: .4rem .98rem;
    margin: 1rem;
    border: 3px solid #fff;
    outline: 1px solid #000;

    &.selected {
        border-color: #000;
    }

    &:hover {
        border-color: #000;
        cursor: pointer;
    }
`