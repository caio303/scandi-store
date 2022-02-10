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

        #cartModal-footer {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: .5rem .5rem .1rem .5rem;


            * {
                padding: 1rem;
                width: 48%;
                font-weight: 600;
                text-align: center;
            }

            & :first-child {
                outline: 1px solid var(--text-black);
                
                &:hover { background: #eee; }
            }
            
            & :not(:first-child) {
                color: white;
                background-color: var(--active-green);
                
                &:hover { filter: brightness(95%);}
            }
        }
    
    }
`