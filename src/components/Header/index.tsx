import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import { Container } from "./styles"

type HeaderProps = {
    currentCategory: string
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
                    <div className={all}><a href="/all">ALL</a></div>
                    <div className={tech}><a href="/tech">TECH</a></div>
                    <div className={clothes}><a href="/clothes">CLOTHES</a></div>
                </nav>
                <nav>
                    <div>$</div>
                    <div><i className="fas fa-shopping-cart"></i></div>
                </nav>
            </Container>
        </>
    )
}