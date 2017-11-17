import React, { Component } from 'react';
import Input from '../components/Input';
import List from '../components/List';
import Menu from '../components/Menu';

class App extends Component {
    constructor(props) {
        super(props);

        let store = localStorage.getItem('store');

        this.state = JSON.parse(store);
    }

    componentDidMount(prevProps, prevState) {
        if(prevProps !== this.props) {
            this.setState({
                chooseAllChecked: this.chooseAllCheck()
            });
        }
    }

    filterItems = value => {
        let items = this.state.items,
            filteredItems = [];

        for(let i = 0; i < items.length; i++) {
            if(value === 'completed' && items[i].completed === true) {
                filteredItems.push(items[i]);
            } else if(value === 'active' && items[i].completed === false) {
                filteredItems.push(items[i]);
            } else if(value === 'all') {
                filteredItems.push(items[i]);
            }
        }

        return filteredItems;
    }

    updateState = (items, chooseAllChecked, filter) => {
        let state = {
            items: items,
            chooseAllChecked: chooseAllChecked,
            filter: filter
        };

        this.setState(state);

        window.localStorage.setItem('store', JSON.stringify(state));
    }

    removeItem = (id) => {
        let items = this.state.items;

        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items.splice(i, 1);
            }
        }

        this.updateState(items, this.chooseAllCheck(), 'all');
    }

    removeManyItems = () => {
        let items = this.state.items,
            newItems = [];

        for(let i = 0; i < items.length; i++) {
            if(items[i].completed !== true) {
                newItems.push(items[i]);
            }
        }

        this.updateState(newItems, this.chooseAllCheck(), 'all');
    }

    changeFilter = (value) => {
        let items = this.state.items;

        value === 'active' ? this.updateState(items, this.chooseAllCheck(), 'active') :
        value === 'completed' ? this.updateState(items, this.chooseAllCheck(), 'completed') :
        this.updateState(items, this.chooseAllCheck(), 'all');
    }

    editItemStart = (id) => {
        let items = this.state.items;

        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items[i].editing = true;
            }
        }

        this.updateState(items, this.chooseAllCheck(), this.state.filter);
    }

    editItemFinish = (id, value) => {
        let items = this.state.items;

        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items[i].text = value;
                items[i].editing = false;
            }
        }

        this.updateState(items, this.chooseAllCheck(), this.state.filter);
    }

    chooseAllCheck = () => {
        let chooseAllChecked;

        if(this.checkHowManyItemsLeft() === 0  && this.state.items.length !== 0) {
            chooseAllChecked = true;
        } else {
            chooseAllChecked = false;
        }

        return chooseAllChecked;
    }

    chooseAllChange = (e) => {
        this.chooseAllItems(e.target.checked);

        this.updateState(this.state.items, e.target.checked, this.state.filter);
    }

    chooseAllItems = (choose) => {
        let items = this.state.items;

        for(let i = 0; i < items.length; i++) {
            items[i].completed = choose;
        }

        this.updateState(items, this.chooseAllCheck(), this.state.filter);
    }

    checkboxItemHandler = (id, completed) => {
        const items = this.state.items;

        this.state.items.co

        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items[i].completed = completed;
            }
        }

        this.updateState(items, this.chooseAllCheck(), this.state.filter);
    }

    checkHowManyItemsLeft = () => {
        let countLeftItems = 0;

        for(let i = 0; i < this.state.items.length; i++) {
            if(this.state.items[i].completed ===  false) {
                countLeftItems++;
            }
        }

        return countLeftItems;
    }

    createItem = (text) => {
        const newItem = {
            id: + new Date(),
            text: text,
            completed: false,
            editing: false
        };

        let itemsArr = this.state.items;

        itemsArr.push(newItem);

        this.updateState(itemsArr, this.chooseAllCheck(), this.state.filter);
    }

    render() {
        return (
            <div className="mvc" id="mvc">
                <Input
                    itemsLength={this.state.items.length}
                    chooseAllChecked={this.state.chooseAllChecked}

                    createItem={this.createItem}
                    chooseAllChange={this.chooseAllChange}
                />
                <List
                    items={this.filterItems(this.state.filter)}
                    filter={this.state.filter}

                    checkboxItemHandler={this.checkboxItemHandler}
                    removeItem={this.removeItem}
                    editItemStart={this.editItemStart}
                    editItemFinish={this.editItemFinish}
                />
                {this.state.items.length > 0 ?
                    <Menu
                        itemsLength={this.state.items.length}
                        itemsLeft={this.checkHowManyItemsLeft()}
                        filter={this.state.filter}

                        removeManyItems={this.removeManyItems}
                        checkHowManyItemsLeft={this.checkHowManyItemsLeft}
                        changeFilter={this.changeFilter}
                    />
                    :
                    ''
                }
            </div>
        );
    }
}

export default App;
