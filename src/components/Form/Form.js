import React, {Component} from "react";

class Form extends Component{
    constructor() {
        super();
        this.state= {
            name: '',
            price: 0,
            imgUrl: ''
        }
    }
    nameHandleChange(name) {
        this.setState({name});
    }
    priceHandleChange(price) {
        this.setState({price})
    }
    imgUrlHandleChange(imgUrl) {
        this.setState({imgUrl})
    }
    // cancelInput () {
    //     this.state.reset();
    // }
    render() {
        return (
            <div>
                Form
                <input
                    onChange={(e)=>this.nameHandleChange(e.target.value)}/>
                <input
                    onChange={(e)=>this.priceHandleChange(e.target.value)}/>
                <input
                    onChange={(e)=>this.imgUrlHandleChange(e.target.value)}/>
                {/*<button*/}
                {/*    onClick={this.cancelInput}*/}
                {/*    className='Cancel'>Cancel</button>*/}
                <button className='Add-to-inventory'>Add to Inventory</button>
            </div>
        )
    }
}
export default Form