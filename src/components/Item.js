import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = props;

        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.editInputHandler = this.editInputHandler.bind(this);
    }

    checkboxHandler(e) {
        if(this.state.completed === true) {
            this.setState({
                completed: false
            });
        } else {
            this.setState({
                completed: true
            });
        }

        // this.props.checkboxItemHandler(this.state.id, this.state.completed);

        console.log(this.state.id);
    }

    editInputHandler() {

    }

    render() {
        return(
            <li>
                <div className={this.state.completed ? 'item completed' : 'item'}>
                    <div className="checkbox">
                        <input type="checkbox" id={this.props.checkboxID} onChange={(e) => (this.checkboxHandler(e))} />
                            <label htmlFor={this.props.checkboxID}></label>
                    </div>
                    <div className="text">
                        <span>{this.props.text}</span>
                    </div>
                    <div className="remove"></div>
                    <input type="text" className="updateInput" onChange={(e) => (this.editInputHandler(e))} value={this.props.text} />
                </div>
            </li>
        );
    }
}

export default Item;