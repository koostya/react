import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                                onClick={() => {
                                    dispatch({
                                        type: 'SET_FILTER_W',
                                        data: {
                                            filter: 'ALL'
                                        }
                                    })
                                }}
                            >
                                All
                            </div>
                            <div 
                                className={`tab ${filter === 'ACTIVE' && 'active'}`} 
                                onClick={() => {
                                    dispatch({
                                        type: 'SET_FILTER_W',
                                        data: {
                                            filter: 'ACTIVE'
                                        }
                                    })
                                }}
                            >
                                Active
                            </div>
                            <div 
                                className={`tab ${filter === 'COMPLETED' && 'active'}`} 
                                onClick={() => {
                                    dispatch({
                                        type: 'SET_FILTER_W',
                                        data: {
                                            filter: 'COMPLETED'
                                        }
                                    })
                                }}
                            >
                                Completed
                            </div>
                        </div>
                        {items.length - this.props.itemsLeft > 0 ?
                            <button 
                                id="clear_completed" 
                                onClick={() => (
                                    dispatch({
                                        type: 'SHOW_MODAL_W',
                                        data: {
                                            deleteManyItems: deleteManyItems,
                                            itemIdToBeDeleted: null
                                        }
                                    })
                                )}
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