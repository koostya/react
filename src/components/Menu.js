import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setFilter, removeItem } from '../actions/actions';

class Menu extends Component {

    removeManyItems = () => {
        let items = this.props.items;

        for(let i = 0; i < items.length; i++) {
            if(items[i].completed === true) {
                this.props.dispatch(removeItem(items[i].id));
            }
        }
    }

    render() {
        const { filter, items, dispatch } = this.props;
        return(
            <div id="menu" className="menu">
                <div>
                    <div className="menu_inner">
                        <div className="items_left">
                            <span>{this.props.itemsLeft}</span> items left
                        </div>
                        <div className="tabs">
                            <div 
                                className={`tab ${filter === 'ALL' && 'active'}`} 
                                onClick={() => {dispatch(setFilter('ALL'))}}
                            >
                                All
                            </div>
                            <div 
                                className={`tab ${filter === 'ACTIVE' && 'active'}`} 
                                onClick={() => {dispatch(setFilter('ACTIVE'))}}
                            >
                                Active
                            </div>
                            <div 
                                className={`tab ${filter === 'COMPLETED' && 'active'}`} 
                                onClick={() => {dispatch(setFilter('COMPLETED'))}}
                            >
                                Completed
                            </div>
                        </div>
                        {items.length - this.props.itemsLeft > 0 ?
                            <button 
                                id="clear_completed" 
                                onClick={() => (this.removeManyItems())}
                            >
                                Clear completed
                            </button>
                            :
                            ''
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        items: state.store.items,
        filter: state.store.filter
    })
)(Menu);