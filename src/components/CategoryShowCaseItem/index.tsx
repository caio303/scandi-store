import { Container } from "./styles"

type CategoryItemProps = {
    imageSrc: string,
    productName: string,
    currencySymbol: string,
    currencyAmount: number
}

export const CategoryShowCaseItem = (props:CategoryItemProps) => {
    return (
        <Container>
            <img height="100" src={props.imageSrc}/>
            <div>
                <h2>{props.productName}</h2>
                <h3>{props.currencySymbol} {props.currencyAmount}</h3>
            </div>
        </Container>
    )
}