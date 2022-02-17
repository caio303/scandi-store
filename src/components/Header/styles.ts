import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rem;
    background: url('/logo.svg');
    background-size: 4rem;
    background-position: center center;
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
                border-top: .15rem solid white;
            }

            .fa-angle-down {
                position: absolute;
                top: 50%;
                left: 80%;
                font-size: 1rem;
                transition: transform .2s ease-out;
                transform: translateY(-50%);
                
                &.spin {
                    transform: translateY(-50%) rotate(180deg);
                }
            }
        }

        &#currency-cart {
            font-size: 1.25rem;
            font-weight: 500;
            user-select: none;
            
            &>div {
                position: relative;
            }

            &>div:last-child {
                
                & #counter {
                    visibility: hidden;
                    background-color: var(--text-black);
                    color: white;
                    width: 1.25rem;
                    height: 1.25rem; 
                    font-size: .85rem;
                    font-weight: 700;
                    border-radius: 50%;
                    position: absolute;
                    top: 20%;
                    left: 55%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &.visible {
                        visibility: visible;
                    }
                }
            }
        }
    }
`