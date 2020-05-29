import React, {Component} from "react";
import Product from "../Product/Product";

class Dashboard extends Component{
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                {this.props.inventory.map(e=>{return (
                    <Product
                        name={e.name} price={e.price} imgUrl={e.imgUrl}
                    />
                )})}
                <Product/>
            </div>
        )
    }
}
export default Dashboard