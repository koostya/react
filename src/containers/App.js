import React, { Component } from 'react';

import Input from '../components/Input';
import List from '../components/List';
import Menu from '../components/Menu';

class App extends Component {
    constructor(props) {
        super(props);

        let store = localStorage.getItem('store');

        this.state = JSON.parse(store);

        this.createItem = this.createItem.bind(this);
        this.generateID = this.generateID.bind(this);
        this.mainInputHandler = this.mainInputHandler.bind(this);
        this.checkboxItemHandler = this.checkboxItemHandler.bind(this);
        this.checkHowManyItemsLeft = this.checkHowManyItemsLeft.bind(this);
        this.chooseAllChange = this.chooseAllChange.bind(this);
        this.chooseAllCheck = this.chooseAllCheck.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.editItemStart = this.editItemStart.bind(this);
        this.editItemFinish = this.editItemFinish.bind(this);
        this.removeManyItems = this.removeManyItems.bind(this);
        this.updateState = this.updateState.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.filterItems = this.filterItems.bind(this);
    }

    componentDidMount(prevProps, prevState) {
        if(prevProps !== this.props) {
            this.setState({
                chooseAllChecked: this.chooseAllCheck(),
                itemsLeft: this.checkHowManyItemsLeft()
            });
        }
    }

    filterItems(value) {
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

    updateState(items, text, itemsLeft, chooseAllChecked, filter) {
        let state = {
            items: items,
            text: text,
            itemsLeft: itemsLeft,
            chooseAllChecked: chooseAllChecked,
            filter: filter
        };

        this.setState(state);

        window.localStorage.setItem('store', JSON.stringify(state));
    }

    removeItem(id) {
        let items = this.state.items;

        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items.splice(i, 1);
            }
        }

        this.updateState(items, this.state.text, this.checkHowManyItemsLeft(), this.chooseAllCheck(), 'all');
    }

    removeManyItems() {
        let items = this.state.items,
            newItems = [];

        for(let i = 0; i < items.length; i++) {
            if(items[i].completed !== true) {
                newItems.push(items[i]);
            }
        }

        this.updateState(newItems, this.state.text, this.checkHowManyItemsLeft(), this.chooseAllCheck(), 'all');
    }

    changeFilter(value) {
        let items = this.state.items;

        value === 'active' ? this.updateState(items, this.state.text, this.checkHowManyItemsLeft(), this.chooseAllCheck(), 'active') :
        value === 'completed' ? this.updateState(items, this.state.text, this.checkHowManyItemsLeft(), this.chooseAllCheck(), 'completed') :
        this.updateState(items, this.state.text, this.checkHowManyItemsLeft(), this.chooseAllCheck(), 'all');
    }

    editItemStart(id) {
        let items = this.state.items;

        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items[i].editing = true;
            }
        }

        this.updateState(items, this.state.text, this.checkHowManyItemsLeft(), this.chooseAllCheck(), this.state.filter);
    }

    editItemFinish(id, value) {
        let items = this.state.items;

        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items[i].text = value;
                items[i].editing = false;
            }
        }

        this.updateState(items, this.state.text, this.checkHowManyItemsLeft(), this.chooseAllCheck(), this.state.filter);
    }

    chooseAllCheck() {
        let chooseAllChecked;

        if(this.checkHowManyItemsLeft() === 0  && this.state.items.length !== 0) {
            chooseAllChecked = true;
        } else {
            chooseAllChecked = false;
        }

        return chooseAllChecked;
    }

    chooseAllChange(e) {
        let chooseAllChecked;

        if(e.target.checked === true) {
            chooseAllChecked = true;

            this.chooseAllItems(true);
        } else {
            chooseAllChecked = false;

            this.chooseAllItems(false);
        }

        this.updateState(this.state.items, this.state.text, this.checkHowManyItemsLeft(), chooseAllChecked, this.state.filter);
    }

    chooseAllItems(choose) {
        let items = this.state.items;

        for(let i = 0; i < items.length; i++) {
            items[i].completed = choose;
        }

        this.updateState(items, this.state.text, this.checkHowManyItemsLeft(), this.chooseAllCheck(), this.state.filter);
    }

    mainInputHandler(e) {
        this.updateState(this.state.items, e.target.value, this.checkHowManyItemsLeft(), this.chooseAllCheck(), this.state.filter);
    }

    checkboxItemHandler(id, completed) {
        let items = this.state.items;

        for(let i = 0; i < items.length; i++) {
            if(items[i].id === id) {
                items[i].completed = completed;
            }
        }

        this.updateState(items, this.state.text, this.checkHowManyItemsLeft(), this.chooseAllCheck(), this.state.filter);
    }

    checkHowManyItemsLeft() {
        let countLeftItems = 0;

        for(let i = 0; i < this.state.items.length; i++) {
            if(this.state.items[i].completed ===  false) {
                countLeftItems++;
            }
        }

        return countLeftItems;
    }

    createItem() {
        const newItem = {
            id: this.generateID(),
            completed: false,
            text: this.state.text,
            checkboxID: this.generateID() + 1,
            editing: false
        };

        let itemsArr = this.state.items;

        itemsArr.push(newItem);

        this.updateState(itemsArr, '', this.checkHowManyItemsLeft(), false, this.state.filter);
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
                    chooseAllChecked={this.state.chooseAllChecked}

                    createItem={this.createItem}
                    mainInputHandler={this.mainInputHandler}
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
                        items={this.state.items}
                        itemsLeft={this.state.itemsLeft}
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
