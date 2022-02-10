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
                    height: 100%;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
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
                transform: translateX(-50%);
                height: 100%;
            }
        }
    }

    #pDescription {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        #pName {}
        #pCategory {}
        #pAttributes {
            .pAttr {
                .title {}
                .options {
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
                }
            }
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