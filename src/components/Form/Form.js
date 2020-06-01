import React, {Component} from "react";
import './form.css'

class Form extends Component{
    constructor() {
        super();
        this.state= {
            name: '',
            price: 0,
            imgUrl: ''
        }
        this.cancelInput = this.cancelInput.bind(this)
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
    cancelInput () {
        this.setState({
            name: '',
            price: 0,
            imgUrl: ''
        });
    }
    render() {
        return (
            <div className='form-div'>
                Name:
                <br/>
                <input
                    value={this.state.name}
                    onChange={(e)=>this.nameHandleChange(e.target.value)}/>
                    <br/>
                    Price:
                <br/>
                <input
                    value={this.state.price}
                    onChange={(e)=>this.priceHandleChange(e.target.value)}/>
                    <br/>
                    Image URL:
                <br/>
                <input
                    value={this.state.imgUrl}
                    onChange={(e)=>this.imgUrlHandleChange(e.target.value)}/>
                    <br/>
                <button
                    onClick={this.cancelInput}
                    className='Cancel'>Cancel</button>
                <button className='Add-to-inventory'>Add to Inventory</button>
            </div>
        )
    }
}
export default Form