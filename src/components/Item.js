import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = props;

        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.editInputHandler = this.editInputHandler.bind(this);
    }

    checkboxHandler(e) {
        this.props.checkboxItemHandler(this.state.id, e.target.checked);
    }

    editInputHandler(e) {
        if(e.key === 'Enter') {
            this.props.editItemFinish(this.state.id, this.state.text);
        } else {
            this.setState({
                text: e.target.value
            });
        }
    }

    render() {
        return(
            <li>
                <div className={this.props.completed ? 'item completed' : 'item'} onDoubleClick={() => (this.props.editItemStart(this.state.id))}>
                    <div className="checkbox">
                        <input type="checkbox" id={this.props.checkboxID} onChange={(e) => (this.checkboxHandler(e))} checked={this.props.completed ? 'checked' : ''} />
                        <label htmlFor={this.props.checkboxID}></label>
                    </div>
                    <div className="text">
                        <span>{this.props.text}</span>
                    </div>
                    <div className="remove" onClick={() => (this.props.removeItem(this.state.id))}></div>
                    {this.props.editing ?
                        <input type="text" className="updateInput" onChange={(e) => (this.editInputHandler(e))} onKeyPress={(e) => (this.editInputHandler(e))} value={this.state.text} />
                        :
                        ''
                    }
                </div>
            </li>
        );
    }
}

export default Item;