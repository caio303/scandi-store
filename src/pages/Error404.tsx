import { Header } from "../components/Header"

export const Error404 = () => {
    return (
        <>
            <Header currentCategory="all" currentCurrency={0}/>
            <div style={{
                textAlign: "center",
                fontSize: "4rem",
                marginTop: "12rem"
            }}>Oops, this page doesn't exist</div>
        </>
    )
}