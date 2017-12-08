import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../actions/Filter';
import { showModal } from '../actions/Modal';

class Menu extends Component {

    render() {
        const { filter, items, dispatch, deleteManyItems = true } = this.props;
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
                                onClick={() => (dispatch(showModal(deleteManyItems, null)))}
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
        items: state.item.items,
        filter: state.filter.filter
    })
)(Menu);