import styled from "styled-components";

export const Container = styled.span`
    padding: .4rem .98rem;
    margin: 1rem;
    border: 2px solid #fff !important ;
    outline: 1px solid #000;

    &.selected {
        border-color: #000 !important;
    }

    &:hover {
        border-color: #000 !important;
        cursor: pointer;
    }
`