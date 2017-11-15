import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    componentDidMount(prevProps, prevState) {
        if(prevProps !== this.props) {
            this.showMenu();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props) {
            this.showMenu();
        }
    }

    showMenu() {
        if(this.props.items.length > 0) {
            this.setState({
                showMenu: true
            });
        } else {
            this.setState({
                showMenu: false
            });
        }
    }

    render() {
        return(
            <div id="menu" className="menu">
                <div>
                    <div className="menu_inner" style={{ display: this.state.showMenu ? 'flex' : 'none'}}>
                        <div className="items_left">
                            <span>{this.props.itemsLeft}</span> items left
                        </div>
                        <div className="tabs">
                            <div className="tab" id="all">All</div>
                            <div className="tab" id="active">Active</div>
                            <div className="tab" id="completed">Completed</div>
                        </div>
                        <button id="clear_completed">
                            Clear completed
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;