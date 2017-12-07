import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../components/Input';
import List from '../components/List';
import Menu from '../components/Menu';
import DeleteModal from '../components/Modal';

import { getItemsForUser, logout } from '../actions/actions';

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(getItemsForUser(this.props.user))
    }

    filterItems = value => {
        console.log()
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

    checkHowManyItemsLeft = () => {
        let countLeftItems = 0;

        this.props.items.map((item) => {
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
        const { filter, items, modal, data, dispatch } = this.props;
        return (
            <div className="mvc_wrap">
                <div className="hello_message">
                    Hello, {this.props.user}!
                </div>
                <div className="mvc" id="mvc">
                    <Input 
                        chooseAllCheck={this.chooseAllCheck}
                    />
                    <List
                        items={this.filterItems(filter)}
                        chooseAllCheck={this.chooseAllCheck}
                    />
                    {items.length > 0 ?
                        <Menu 
                            itemsLeft={this.checkHowManyItemsLeft()}
                        />
                        :
                        ''
                    }
                    {modal &&
                        <DeleteModal />
                    }
                    <div className="logout_button" onClick={() => (dispatch(logout()))}></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter.filter,
        items: state.item.items,
        modal: state.modal.modal,
        user: localStorage.getItem('user')
    }
}

export default connect(
    mapStateToProps
)(App)
