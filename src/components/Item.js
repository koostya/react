import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text
        };
    }

    checkboxHandler = (e) => {
        this.props.checkboxItemHandler(this.props.id, e.target.checked);
    }

    editInput = (e) => {
        if(e.key === 'Enter' || e.key === 'Esc') {
            this.props.editItemFinish(this.props.id, this.state.text);
        }
    }

    editInputHandler = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return(
            <li>
                <div className={this.props.completed ? 'item completed' : 'item'} onDoubleClick={() => (this.props.editItemStart(this.props.id))}>
                    <div className="checkbox">
                        <input type="checkbox" id={this.props.id} onChange={(e) => (this.checkboxHandler(e))} checked={this.props.completed ? 'checked' : ''} />
                        <label htmlFor={this.props.id}></label>
                    </div>
                    <div className="text">
                        <span>{this.props.text}</span>
                    </div>
                    <div className="remove" onClick={() => (this.props.removeItem(this.props.id))}></div>
                    {this.props.editing ?
                        <input type="text" className="updateInput" onBlur={(e) => (this.props.editItemFinish(this.props.id, e.target.value))} onChange={(e) => (this.editInputHandler(e))} onKeyPress={this.editInput} value={this.state.text} />
                        :
                        ''
                    }
                </div>
            </li>
        );
    }
}

export default Item;