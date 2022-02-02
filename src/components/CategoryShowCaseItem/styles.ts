import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 32rem;
    height: 36rem;
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

        img {
            width: 20rem;
        }
        &>div {
            position: absolute;
            top: 68%;
            left: 80%;
            background-color: var(--active-green);
            border-radius: 50%;
            padding: 1.8rem;
            filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));

            &>img {
                width: 1.8rem;
                position: absolute;
                top: 50%;
                left: 49%;
                transform: translateY(-50%) translateX(-50%);
            }
        }
    }

    h2 {
        font-size: 1.6rem;
        font-weight: 300;
        padding: 1.5rem 1rem 1rem 1rem;
    }

    h3 {
        padding: 0 1rem;
        font-size: 2rem;
        font-weight: 500;
    }

    &:hover {
        box-shadow: var(--hover-shadow);
    }
`