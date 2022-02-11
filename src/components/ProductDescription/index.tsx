import React, { Dispatch, SetStateAction } from "react"
import { InCartProductType, ProductType } from "../../types"
import { SwatchColor } from "../SwatchColor"
import { Container } from "./styles"

type ProductDescriptionProps = {
    currentItem: ProductType | undefined,
    currentCurrency: number,
    isCartModalOpen: boolean,
    myCart: InCartProductType[] | [],
    setMyCart: Dispatch<SetStateAction<InCartProductType[]|[]>>,
}


export class ProductDescription extends React.Component<ProductDescriptionProps> {
    state = {
        currentImage: 0
    }

    handleChangeCurrentImage = (index: number) => {
        this.setState(({currentImage: index}))
    }

    handleAddProduct = (item: ProductType) => {
        if(!item.inStock) return
        
        if(this.props.myCart.length === 0) {
            this.props.setMyCart([...this.props.myCart,{product:item,quantity:1}])
            return
        }

        const inCart = this.props.myCart.some((item2,index) => {
            return item2.product.id === item.id
        })

        if(inCart) {
            this.props.myCart.forEach((item3,index) => {
                if(item3.product.id === item.id) {
                    item3.quantity += 1 
                }
            })
            
            this.props.setMyCart([...this.props.myCart])

            localStorage.myCart = JSON.stringify(this.props.myCart)
            
            return
        }

        this.props.setMyCart([...this.props.myCart,{product:item,quantity:1}])
        
        localStorage.myCart = JSON.stringify(this.props.myCart)
    
    }

    render() {

        const descriptionDiv = document.querySelector(".pDescription-text")
        if(descriptionDiv) descriptionDiv.innerHTML = this.props.currentItem?.description?? "Product Description"

        let productCategory = ""

        if(this.props.currentItem?.category === "tech") productCategory = "Tech Device"
        if(this.props.currentItem?.category === "clothes") productCategory = "Clothing Article"

        return (
            <Container className={this.props.isCartModalOpen? "cartModal-open":""}>
                <div id="pGallery">
                    <ul id="pGallery-list">
                        {this.props.currentItem?.gallery.map((item,index)=> {
                            return <li key={index}>
                                    <img onClick={()=> this.handleChangeCurrentImage(index)} src={item} alt={`${index+1}`}/>
                                </li>
                        })}
                    </ul>
                    <div id="pGallery-hLight">
                        <img src={this.props.currentItem?.gallery[this.state.currentImage]} alt={this.props.currentItem?.name}/>
                    </div>
                </div>
                <div id="pDescription">
                    <div id="pName">{this.props.currentItem?.name}</div>
                    <div id="pCategory">{productCategory}</div>
                    {this.props.currentItem && this.props.currentItem?.attributes?.length > 0 &&
                        <div id="pAttributes">
                            {this.props.currentItem?.attributes.map((item,index) => {
                                return (
                                    <div key={index} className="pAttr">
                                        <div className="title">{item.name.toUpperCase()+":"}</div>
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
                    <div id="pPrice">
                        PRICE:
                        <div>{this.props.currentItem?.prices[this.props.currentCurrency].currency.symbol} {this.props.currentItem?.prices[this.props.currentCurrency].amount}</div>
                    </div>
                    
                    {this.props.currentItem?.inStock ?
                        <button 
                            onClick={()=>{if(this.props.currentItem)this.handleAddProduct(this.props.currentItem)}}
                            >
                            ADD TO CART
                        </button>
                    :
                        <button className="pNotInStock">
                            OUT OF STOCK
                        </button>
                    }
                    
                    <div className="pDescription-text"></div>
                </div>
            </Container>
        )
    }
}