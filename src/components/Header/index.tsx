import { useState,useEffect } from "react"
import { Container } from "./styles"

type HeaderProps = {
    currentCategory: string,
    currentCurrency: 0 | 1 | 2 | 3 | 4
}

export const Header = (props:HeaderProps) => {

    var [all,setAll] = useState('')
    var [tech,setTech] = useState('')
    var [clothes,setClothes] = useState('')

    useEffect(()=>{
        switch (props.currentCategory) {
            case "all":
                setAll("active")
                break;
            case "tech":
                setTech("active")
                break;
            case "clothes":
                setClothes("active")
                break;
        }
    },[])

    return (
        <>
            <Container>
                <nav>        
                    <div className={all}><a href="/products/all">ALL</a></div>
                    <div className={tech}><a href="/products/tech">TECH</a></div>
                    <div className={clothes}><a href="/products/clothes">CLOTHES</a></div>
                </nav>
                <nav id="currency-cart">
                    <div>$<i className="fas fa-angle-down"></i></div>
                    <div><i className="fas fa-shopping-cart"></i></div>
                </nav>
            </Container>
        </>
    )
}