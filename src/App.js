import React, {Component} from 'react';
import Header from './components/Header/Header'
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";


class App extends Component{
    constructor() {
        super();
        this.state = {
            inventory: ''
        }
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <Dashboard/>
                <Form/>
            </div>
        );
    }


}

export default App;
