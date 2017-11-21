import React, { Component } from 'react';

import { setFilter } from '../actions/actions';

class Menu extends Component {
    render() {
        return(
            <div id="menu" className="menu">
                <div>
                    <div className="menu_inner">
                        <div className="items_left">
                            <span>{this.props.itemsLeft}</span> items left
                        </div>
                        <div className="tabs">
                            <div className={`tab ${this.props.store.getState().store.filter === 'ALL' && 'active'}`} onClick={() => {this.props.store.dispatch(setFilter('ALL'))}}>All</div>
                            <div className={`tab ${this.props.store.getState().store.filter === 'ACTIVE' && 'active'}`} onClick={() => {this.props.store.dispatch(setFilter('ACTIVE'))}}>Active</div>
                            <div className={`tab ${this.props.store.getState().store.filter === 'COMPLETED' && 'active'}`} onClick={() => {this.props.store.dispatch(setFilter('COMPLETED'))}}>Completed</div>
                        </div>
                        {this.props.store.getState().store.items.length - this.props.itemsLeft > 0 ?
                            <button id="clear_completed" onClick={(e) => (this.props.removeManyItems(e))}>
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

export default Menu;