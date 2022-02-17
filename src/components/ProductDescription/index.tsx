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
    setIsCartModalOpen: Dispatch<SetStateAction<boolean>>,
    setIsCurrModalOpen: Dispatch<SetStateAction<boolean>>,
}


export class ProductDescription extends React.Component<ProductDescriptionProps> {
    state = {
        currentImage: 0,
        supposedAttributes: this.props.currentItem?.attributes.map(item => 0) ?? [0]
    }

    handleChangeCurrentImage = (index: number) => {
        this.setState(({currentImage: index}))
    }

    handleAddProduct = (item: ProductType) => {
        if(!item.inStock) return

        const selecterAttrByDefault = item.attributes.map(() => 0)

        const fallBack = this.state.supposedAttributes ? this.state.supposedAttributes : selecterAttrByDefault

        if(this.props.myCart.length === 0) {
            this.props.setMyCart([...this.props.myCart,{product:item,quantity:1, selectedAttributes: fallBack}])
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

        this.props.setMyCart([...this.props.myCart,{product:item,quantity:1,selectedAttributes:fallBack}])
        
        localStorage.myCart = JSON.stringify(this.props.myCart)
    
    }

    handleChangeSupposedAttribute = (attrIndex:number, optionIndex: number) => {
        if(!this.state.supposedAttributes) return
        
        this.state.supposedAttributes[attrIndex] = optionIndex
        
        this.setState(({
            supposedAttributes: this.state.supposedAttributes
        }))
    }

    render() {

        let productCategory = ""

        if(this.props.currentItem?.category === "tech") productCategory = "Tech Device"
        if(this.props.currentItem?.category === "clothes") productCategory = "Clothing Article"

        return (
            <Container 
                className={this.props.isCartModalOpen? "cartModal-open":""}
                onClick={()=>{
                    this.props.setIsCartModalOpen(false)
                    this.props.setIsCurrModalOpen(false)
                }}
                >
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
                                            {item.items.map((item2,index2)=> {
                                                    let selected = false
                                                    
                                                    const fallBack = this.state.supposedAttributes? this.state.supposedAttributes[index] : "0"
                                                    
                                                    if(index2 === fallBack) selected = true
                                                        
                                                    if(item.type === "swatch") {
                                                        return <SwatchColor 
                                                                    onClick={()=>this.handleChangeSupposedAttribute(index,index2)}
                                                                    className={selected? "selected":""} 
                                                                    bgColor={`${item2.value}`} 
                                                                    key={index2}
                                                                    />
                                                    }
                                                    return (
                                                        <span
                                                            onClick={()=>this.handleChangeSupposedAttribute(index,index2)}
                                                            className={selected? "selected":""} 
                                                            key={index2}>{item2.value}
                                                            </span>
                                                    )
                                                })
                                            }
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
                    
                    <div className="pDescription-text" 
                        dangerouslySetInnerHTML={
                            this.props.currentItem !== undefined ? {__html: this.props.currentItem.description} : {__html: ""}
                        }
                        >
                    </div>
                </div>
            </Container>
        )
    }
}