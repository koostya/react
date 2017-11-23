import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setFilter, multipleDeliting } from '../actions/actions';

import Modal from '../components/Modal';

class Menu extends Component {

    deleteManyItems = () => {
        return this.props.items.filter((item) => (item.completed === true)).length >= 1 ? 
        this.props.dispatch(multipleDeliting(true)) : 
        this.props.dispatch(multipleDeliting(false))
    }

    render() {
        const { filter, items, dispatch, deleteManyItems } = this.props;
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
                                onClick={() => (this.deleteManyItems())}
                            >
                                Clear completed
                            </button>
                            :
                            ''
                        }
                    </div>
                </div>
                {deleteManyItems ?
                    <Modal 
                        deleteManyItems={deleteManyItems}
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
        items: state.store.items,
        filter: state.store.filter,
        deleteManyItems: state.store.deleteManyItems
    })
)(Menu);