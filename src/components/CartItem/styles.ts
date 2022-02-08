import styled from "styled-components";

export const Container = styled.li`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
    font-size: 1rem;

    div.pLeft {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .pName {
            font-weight: 300;
        }
    
        .pAmount {
            font-weight: 500;
        }
    }

    div.pRight {
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: space-between;
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
`