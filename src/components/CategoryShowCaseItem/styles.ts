import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    height: 35rem;
    overflow: hidden;
    background: #fff;
    position: relative;
    cursor: pointer;

    .image-wrapper {
        width: 100%;
        height: 75%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        text-decoration: none;
        color: inherit;
        z-index: 3;

        img {
            width: 60%;
        }

        &>div.stock {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            font-size: 1.8rem;
            background-color: rgba(250,250,250,0.6); 
            backdrop-filter: blur(.2rem);
            transform: translateX(-50%) translateY(-50%);
            border-radius: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
        }
    }

    .cart-icon {
            position: absolute;
            top: 68%;
            left: 78%;
            background-color: var(--active-green);
            border-radius: 50%;
            padding: 2rem;
            filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
            z-index: 3;

            &>img {
                width: 2rem;
                position: absolute;
                top: 50%;
                left: 49%;
                transform: translateY(-50%) translateX(-50%);
            }
        }

    a>h2 {
        font-size: 1.6rem;
        font-weight: 300;
        padding: 1.5rem 1rem 1rem 1rem;
    }

    a>h3 {
        padding: 0 1rem;
        font-size: 2rem;
        font-weight: 500;
    }

    &:hover {
        box-shadow: var(--hover-shadow);
    }
`