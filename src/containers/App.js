import React, { Component } from 'react';

import Input from '../components/Input';
import List from '../components/List';
import Menu from '../components/Menu';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = props.data;

        this.createItem = this.createItem.bind(this);
        this.generateID = this.generateID.bind(this);
        this.mainInputHandler = this.mainInputHandler.bind(this);
        this.checkboxItemHandler = this.checkboxItemHandler.bind(this);
    }

    mainInputHandler(e) {
        this.setState({
            text: e.target.value
        });
    }

    checkboxItemHandler(id, completed) {
        for(let i = 0; i < this.state.items.length; i++) {
            // if(this.state.items[i].id == id) {
            //     this.props.items[i].setState({
            //          completed: completed
            //     });
            // }
            console.log(this.state);
        }
    }

    createItem() {
        const newItem = {
            id: this.generateID(),
            completed: false,
            text: this.state.text,
            checkboxID: this.generateID() + 1
        };

        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }

    generateID() {
        return + new Date();
    }

    render() {
        return (
            <div className="mvc" id="mvc">
                <Input
                    items={this.state.items}
                    text={this.state.text}
                    chooseAll={this.state.chooseAll}

                    createItem={this.createItem}
                    mainInputHandler={this.mainInputHandler}
                />
                <List
                    items={this.state.items}
                    checkboxItemHandler={this.checkboxItemHandler}
                />
                <Menu
                    items={this.state.items}
                    itemsLeft={this.state.itemsLeft}
                    showMenu={this.state.showMenu}
                />
            </div>
        );
    }
}

export default App;
