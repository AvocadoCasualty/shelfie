import React, {Component} from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";


class App extends Component {
    constructor() {
        super();
        this.state = {
            inventory: []
        }
    }

    componentDidMount() {
        axios.get('/api/inventory').then((res) => {
            this.setState({
                inventory: res.data
            })
        })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Form/>
                <Dashboard inventory={this.state.inventory}/>

            </div>
        );
    }


}

export default App;
