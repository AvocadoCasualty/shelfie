import React, {Component} from "react";

class Product extends Component{
    constructor() {
        super();
    }

    render(props) {
        const {name, price, imgUrl} = this.props
        return (
            <div>
                {name} {price} <img className='product-image' src={imgUrl} />
            </div>
        )
    }
}
export default Product