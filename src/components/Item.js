import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeCompleted, changeEditing, updateItem, showModal } from '../actions/actions';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text
        };
    }

    editInput = (e) => {
        if(e.key === 'Enter' || e.key === 'Esc') {
            this.props.dispatch(updateItem(this.props.id, this.props.completed, this.state.text));
            this.props.dispatch(changeEditing(this.props.id));
        }
    }

    editInputHandler = (e) => {
        this.setState({
            text: e.target.value
        });
    }   

    render() {
        const { dispatch, deleteManyItems = false, id } = this.props;
        const { text } = this.state;
        return(
            <li>
                <div 
                    className={this.props.completed ? 'item completed' : 'item'} 
                    onDoubleClick={() => (this.props.dispatch(changeEditing(this.props.id)))}
                >
                    <div className="checkbox">
                        <input 
                            type="checkbox"
                            id={this.props.id}
                            onChange={(e) => {dispatch(changeCompleted(this.props.id, e.target.checked, this.props.text))}}
                            checked={this.props.completed ? 'checked' : ''} 
                        />
                        <label htmlFor={this.props.id}></label>
                    </div>
                    <div className="text">
                        <span>{this.props.text}</span>
                    </div>
                    <div 
                        className="remove" 
                        onClick={() => (dispatch(showModal(deleteManyItems, id)))}
                    ></div>
                    {this.props.editing ?
                        <input 
                            type="text" 
                            className="updateInput" 
                            onBlur={(e) => {dispatch(updateItem(this.props.id, this.props.completed, e.target.value)); dispatch(changeEditing(this.props.id))}} 
                            onChange={(e) => (this.editInputHandler(e))} 
                            onKeyPress={this.editInput} 
                            value={text} 
                        />
                        :
                        ''
                    }
                </div>
            </li>
        );
    }
}

export default connect(
    state => ({})
)(Item);