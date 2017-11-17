import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return(
            <div id="menu" className="menu">
                <div>
                    <div className="menu_inner">
                        <div className="items_left">
                            <span>{this.props.itemsLeft}</span> items left
                        </div>
                        <div className="tabs">
                            <div className={this.props.filter == 'all' ? 'tab active' : 'tab'} id="all" onClick={(e) => (this.props.changeFilter(e.target.id))}>All</div>
                            <div className={this.props.filter == 'active' ? 'tab active' : 'tab'} id="active" onClick={(e) => (this.props.changeFilter(e.target.id))}>Active</div>
                            <div className={this.props.filter == 'completed' ? 'tab active' : 'tab'} id="completed" onClick={(e) => (this.props.changeFilter(e.target.id))}>Completed</div>
                        </div>
                        {this.props.items.length - this.props.checkHowManyItemsLeft() > 0 ?
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