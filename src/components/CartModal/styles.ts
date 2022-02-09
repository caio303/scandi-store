import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    width: 28rem;
    height: auto;
    padding: .8rem;
    background-color: #fff;
    font-size: .9rem;
    font-weight: 700;
    z-index: 5;
    cursor: default;

    #cartModal-list {
        font-weight: 300;

        ul {
            margin-top: 1rem;
            list-style: none;

            li {
                padding: .4rem;
            }
        }

        #cartModal-total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem .5rem .25rem .25rem;
            
            span {
                font-weight: 700;
                font-size: 1.2rem;
            }
        }
    
    }
`