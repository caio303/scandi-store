import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    width: 22rem;
    height: 30rem;
    padding: .8rem;
    background-color: #fff;
    font-size: .9rem;
    z-index: 5;

    h2 {
        span {
            font-size: .9em;
            font-weight: 300;
        }
    }

    #cartModal-list {
        font-weight: 300;
    
        ul {
            margin-top: 1rem;
            list-style: none;

            li {
                padding: .4rem;
                border-bottom: 1px solid var(--text-black);
            }
        }

        #cartModal-total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            span {
                font-weight: 700;
                font-size: 1rem;
            }
        }
    
    }
`