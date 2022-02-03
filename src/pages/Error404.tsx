import { Link } from "react-router-dom"
import styled from "styled-components"
import { Header } from "../components/Header"

const Container = styled.main`
    width: 72rem;
    height: 26rem;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    display: flex;
    align-items: start;

    img {
        width: 24rem;
        top: 0;
    }

    div#wrapper {
        align-self: center;
        height: 16rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    
        h2 {
            font-weight: 400;
            font-size: 2rem;
        }

        h1 {
            font-size: 2.8rem;
        }

        a {
            font-size: 1.8rem;
            color: var(--active-green);
            text-decoration: underline;
        }
    }
`

export const Error404 = () => {
    return (
        <Container>
            <img src="/logo.svg" alt="Scandi Store Logo" />
            <div id="wrapper">
                <div>
                    <h2>Scandi Store</h2>
                    <h1>Oops, this page does not exist...</h1>
                </div>
                <Link to="/products/all">Check out our products!</Link>
            </div>
        </Container>
    )
}