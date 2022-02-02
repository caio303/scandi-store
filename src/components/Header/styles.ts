import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rem;
    background: url('logo.svg');
    background-size: 3.8rem;
    background-position: center bottom;
    background-repeat: no-repeat;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        height: 100%;
        font-weight: 600;
        
        &>div {
            height: 100%;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;

            &.active {
                color: var(--active-green);
                border-bottom: .15rem solid var(--active-green);
            }

            .fa-angle-down {
                position: absolute;
                top: 50%;
                left: 80%;
                transform: translateY(-50%);
            }
        }

        &#currency-cart {
            font-size: 1.25rem;
            font-weight: 500;
        }
    }
`