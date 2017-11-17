import React, { Component } from 'react';

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
                            <div className={`tab ${this.props.filter === 'all' && 'active'}`} onClick={() => this.props.changeFilter('all')}>All</div>
                            <div className={`tab ${this.props.filter === 'active' && 'active'}`} onClick={() => this.props.changeFilter('active')}>Active</div>
                            <div className={`tab ${this.props.filter === 'completed' && 'active'}`} onClick={() => this.props.changeFilter('completed')}>Completed</div>
                        </div>
                        {this.props.itemsLength - this.props.itemsLeft > 0 ?
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