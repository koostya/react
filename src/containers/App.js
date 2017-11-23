import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../components/Input';
import List from '../components/List';
import Menu from '../components/Menu';

import { addItem, setAllChecked } from '../actions/actions';

class App extends Component {

    filterItems = value => {
        let items = this.props.items,
            loadCompleted;
        
        value === 'COMPLETED' ? loadCompleted = true : value === 'ACTIVE' ? loadCompleted = false : loadCompleted = 'all'

        return items.filter((item, i, arr) => {
            if(item.completed === loadCompleted) {
                return item
            } else if(loadCompleted === 'all'){
                return item
            }
        })
    }

    checkHowManyItemsLeft = (nextProps) => {
        let countLeftItems = 0;

        for(let i = 0; i < nextProps.items.length; i++) {
            if(nextProps.items[i].completed === false) {
                countLeftItems++;
            }
        }

        return countLeftItems;
    }

    chooseAllCheck = (nextProps) => {
        let chooseAllChecked;

        if(this.checkHowManyItemsLeft(nextProps) === 0  && nextProps.items.length !== 0) {
            chooseAllChecked = true;
        } else {
            chooseAllChecked = false;
        }

        return chooseAllChecked;
    }

    render() {
        const { filter, items, showModal } = this.props;
        return (
            <div className="mvc" id="mvc">
                <Input 
                    chooseAllCheck={this.chooseAllCheck}
                />
                <List
                    items={this.filterItems(filter)}
                    store={this.props.data}
                    chooseAllCheck={this.chooseAllCheck}
                />
                {items.length > 0 ?
                    <Menu 
                        itemsLeft={this.checkHowManyItemsLeft(this.props)}
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
