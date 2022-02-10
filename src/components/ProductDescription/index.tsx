import React from "react"
import { ProductType } from "../../types"
import { SwatchColor } from "../SwatchColor"
import { Container } from "./styles"

type ProductDescriptionProps = {
    currentItem: ProductType | undefined,
    currentCurrency: number,
    isCartModalOpen: boolean
}


export class ProductDescription extends React.Component<ProductDescriptionProps> {
    state = {
        currentImage: 0
    }

    handleChangeCurrentImage = (index: number) => {
        this.setState(({currentImage: index}))
    }

    render() {
        return (
            <Container className={this.props.isCartModalOpen? "cartModal-open":""}>
                <div id="pGallery">
                    <ul id="pGallery-list">
                        {this.props.currentItem?.gallery.map((item,index)=> {
                            return <li key={index}>
                                    <img onClick={()=> this.handleChangeCurrentImage(index)} src={item} alt={`image ${index+1}`}/>
                                </li>
                        })}
                    </ul>
                    <div id="pGallery-hLight">
                        <img src={this.props.currentItem?.gallery[this.state.currentImage]} alt={this.props.currentItem?.name}/>
                    </div>
                </div>
                <div id="pDescription">
                    <div id="pName">{this.props.currentItem?.name}</div>
                    <div id="pCategory">{this.props.currentItem?.category}</div>
                    {this.props.currentItem && this.props.currentItem?.attributes?.length > 0 &&
                        <div id="pAttributes">
                            {this.props.currentItem?.attributes.map((item,index) => {
                                return (
                                    <div key={index} className="pAttr">
                                        <div className="title">{item.name}</div>
                                        <div className="options">
                                            {item.items.map((item2,index2,arr)=> {
                                                    let selected = false
                                                    if(arr[0] === item2) selected = true
                                                    
                                                if(item.type === "swatch") {
                                                    return <SwatchColor className={selected? "selected":""} bgColor={`${item2.value}`} key={index2}/>
                                                }
                                                return (
                                                    <span className={selected? "selected":""} key={index2}>{item2.value}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    }
                    <div id="pPrice">PRICE: <div><h2>{this.props.currentItem?.prices[this.props.currentCurrency].currency.symbol} {this.props.currentItem?.prices[this.props.currentCurrency].amount}</h2></div></div>
                </div>
            </Container>
        )
    }
}