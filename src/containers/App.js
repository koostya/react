import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../components/Input';
import List from '../components/List';
import Menu from '../components/Menu';
import DeleteModal from '../components/Modal';

import { getItemsForUser } from '../actions/actions';

export class App extends Component {

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

        nextProps.items.map((item) => {
            if(item.completed === false) {
                countLeftItems++;
            }
        })

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
        const { filter, items, modal } = this.props;
        return (
            <div className="mvc_wrap">
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
                    {modal &&
                        <DeleteModal />
                    }
                </div>
            </div>
        );
    }
}

export const app = connect(
    state => ({
        filter: state.store.filter,
        items: state.store.items,
        modal: state.store.modal,
        data: state.store
    })
)(App);
