import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../components/Input';
import List from '../components/List';
import Menu from '../components/Menu';

import { addItem, removeItem, setFilter, setAllChecked, changeCompleted, Filters } from '../actions/actions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(prevProps, prevState) {
        if(prevProps !== this.props) {
            this.props.dispatch(setAllChecked(this.chooseAllCheck()));
        }
    }

    filterItems = value => {
        console.log(this.props) 
        let items = this.props.items,
            filteredItems = [];

        for(let i = 0; i < items.length; i++) {
            if(value === 'COMPLETED' && items[i].completed === true) {
                filteredItems.push(items[i]);
            } else if(value === 'ACTIVE' && items[i].completed === false) {
                filteredItems.push(items[i]);
            } else if(value === 'ALL') {
                filteredItems.push(items[i]);
            }
        }

        console.log(filteredItems)

        return filteredItems;
    }

    removeManyItems = () => {
        let items = this.props.items,
            newItems = [];

        for(let i = 0; i < items.length; i++) {
            if(items[i].completed === true) {
                this.props.dispatch(removeItem(items[i].id));
            }
        }
    }

    chooseAllCheck = () => {
        let chooseAllChecked;

        if(this.checkHowManyItemsLeft() === 0  && this.props.items.length !== 0) {
            chooseAllChecked = true;
        } else {
            chooseAllChecked = false;
        }

        return chooseAllChecked;
    }

    checkHowManyItemsLeft = () => {
        let countLeftItems = 0;

        console.log(this.props.data.getState().store);

        for(let i = 0; i < this.props.data.getState().store.items.length; i++) {
            if(this.props.data.getState().store.items[i].completed === false) {
                countLeftItems++;
            }
        }

        return countLeftItems;
    }

    render() {
        const { filter } = this.props;
        return (
            <div className="mvc" id="mvc">
                <Input />
                <List
                    items={this.filterItems(filter)}
                />
                {this.props.items.length > 0 ?
                    <Menu
                        store={this.props.data}
                        itemsLeft={this.checkHowManyItemsLeft()}

                        removeManyItems={this.removeManyItems}
                    />
                    :
                    ''
                }
            </div>
        );
    }
}

export default connect(
    state => ({
        filter: state.store.filter,
        items: state.store.items
    })
)(App);
