import styled from "styled-components";

export const Container = styled.li`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
    font-size: 1.18rem;

    div.pLeft {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .pName {
            font-weight: 300;
        }
    
        .pAmount {
            font-weight: 700;
        }
    }

    div.pRight {
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 500;
    
        .pQuantity {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
 
        .pImg {
            width: 6.5rem;
            height: 100%;
            position: relative;
            
            img {
                height: 6.25rem; 
                position: absolute;
                left: 50%;
                transform: translateX(-50%); 
            }
        }
    }

    span {
        padding: .4rem .6rem .4rem .6rem;
        margin: 0 .3rem;
        border: 1px solid var(--text-black);
        font-weight: 400;

        &:hover {
            cursor: pointer;
            background: rgba(0,0,0,0.05);
        }
 
        &.selected {
            background-color: var(--text-black);
            color: #fff;
            
            &:hover {
                filter: brightness(80%)
            }
        }
    }

    &:not(:last-child) {
        margin-bottom: 1.2rem;
    }

    &.lg {
        width: ;
        height: 18rem;
        font-weight: 3rem;

        div.pLeft {
            font-size: 1.8rem;
        }

        div.pRight {
            width: 16%;
            height: 16rem;

            .pQuantity {
                height: 10rem;
            }

            .pImg {
                img {
                    height: 16rem;
                }
            }
        }

        &:not(:last-child) {
            border-bottom: 1px solid #e0e0e0;
        }
    }
`