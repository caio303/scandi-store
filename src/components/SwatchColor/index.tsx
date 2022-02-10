import React from "react";
import { Container } from "./styles";

type SwatchColorProps ={
    bgColor: string
    className: string
}

export class SwatchColor extends React.Component<SwatchColorProps> {
    
    render(): React.ReactNode {
        return (
            <Container className={this.props.className} style={{backgroundColor:this.props.bgColor}}></Container>
        )
    }
}