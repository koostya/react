import React, { Component } from 'react';

import { removeItem, changeCompleted, changeEditing, updateItem } from '../actions/actions';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text
        };
    }

    editInput = (e) => {
        if(e.key === 'Enter' || e.key === 'Esc') {
            this.props.dispatch(updateItem(this.props.id, this.state.text));
            this.props.dispatch(changeEditing(this.props.id));
        }
    }

    editInputHandler = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        const { dispatch } = this.props;
        return(
            <li>
                <div className={this.props.completed ? 'item completed' : 'item'} onDoubleClick={() => (this.props.dispatch(changeEditing(this.props.id)))}>
                    <div className="checkbox">
                        <input type="checkbox" id={this.props.id} onChange={() => {this.props.dispatch(changeCompleted(this.props.id))}} checked={this.completed ? 'checked' : ''} />
                        <label htmlFor={this.props.id}></label>
                    </div>
                    <div className="text">
                        <span>{this.props.text}</span>
                    </div>
                    <div className="remove" onClick={() => (this.props.dispatch(removeItem(this.props.id)))}></div>
                    {this.props.editing ?
                        <input type="text" className="updateInput" onBlur={(e) => {this.props.dispatch(updateItem(this.props.id, e.target.value)); this.props.dispatch(changeEditing(this.props.id))}} onChange={(e) => (this.editInputHandler(e))} onKeyPress={this.editInput} value={this.state.text} />
                        :
                        ''
                    }
                </div>
            </li>
        );
    }
}

export default Item;