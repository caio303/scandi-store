import styled from "styled-components";

export const Container = styled.main`
    padding: 4rem 10rem;
    display: flex;
    gap: 3rem;
    min-height: 91.6vh;

    #pGallery {
        width: 50%;
        display: flex;
        justify-content: space-between;

        #pGallery-list {
            height: 32rem;
            overflow: auto;
            overflow-x: hidden;
            margin-right: 3rem;
            direction: rtl;
            
            li {
                width: 9rem;
                height: 7rem;
                position: relative;
                user-select: none;
                margin-left: 1rem;

                img {
                    max-width: 100%;
                    max-height: 100%;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translateY(-50%) translateX(-50%);
                    cursor: pointer;
                    
                    &:hover { filter: brightness(80%); }
                }


                &:not(:last-child) { 
                    margin-bottom: 1rem;
                }
            }

            ::-webkit-scrollbar {
                width: 8px;
                background-color: #ededed;
            }
            ::-webkit-scrollbar-thumb {
                background-color: #ccc;
                &:hover { background-color: #bbb ;}
            }
        }

        #pGallery-hLight {
            width: 40rem;
            height: 40rem;
            position: relative;
            border: 1rem solid #fff;
            border-top: none;

            img {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translateX(-50%) translateY(-50%);
                max-width: 100%;
                max-height: 100%;
            }
        }
    }

    #pDescription {
        margin-left: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 30rem; 

        #pName {
            font-size: 2rem;
            font-weight: 600;
        }
        #pCategory {
            font-size: 1.6rem;
            font-weight: 400;
            margin-bottom: 2rem;
        }
        #pAttributes {
            margin-bottom: 1rem;
            .pAttr {
                .title {
                    font-weight: 700;
                    margin-bottom: 1rem;
                }
                .options {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    span {
                        padding: .8rem 1rem .8rem 1rem;
                        margin: 0 .3rem 1rem ;
                        border: 1px solid var(--text-black);
                        font-weight: 400;
                        font-size: 1.2rem;

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
                }
            }
        }

        #pPrice {
            font-size: 1.45rem;
            font-weight: 700;
        }

        button {
            width: 100%;
            padding: 1.2rem 8rem;
            font-size: 1.2rem;
            border: none;
            color: white;
            background-color: var(--active-green);
            margin-bottom: 2rem;
            position: relative;
            cursor: pointer;
            
            &:hover { filter: brightness(92%); }

            &.pNotInStock {
                cursor: default;
                background-color: rgba(126,126,126,0.7);
            }
            
        }

        .pDescription-text {
            font-size: 1.2rem;
        }

}


    &.cartModal-open {
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: ;
            background-color: rgba(10,10,10,0.35);
            overflow: hidden;
            z-index: 4;
        }
    }

`