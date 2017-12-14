import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text
        };
    }

    editInput = (e) => {
        if(e.key === 'Enter' || e.key === 'Esc') {

            this.props.dispatch({type: 'UPDATE_ITEM_W', data: {
                id: this.props.id,
                completed: this.props.completed,
                text: this.state.text
            }})

            this.props.dispatch({type: 'CHANGE_EDITING_W', data: {
                id: this.props.id
            }})
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
                    onDoubleClick={() => (this.props.dispatch({
                        type: 'CHANGE_EDITING_W', 
                        data: {
                            id: this.props.id
                        }
                    }))}
                >
                    <div className="checkbox">
                        <input 
                            type="checkbox"
                            id={this.props.id}
                            onChange={(e) => {dispatch({type: 'CHANGE_COMPLETED_W', data: {
                                id: this.props.id,
                                completed: e.target.checked,
                                text: this.props.text
                            }})}}
                            checked={this.props.completed ? 'checked' : ''} 
                        />
                        <label htmlFor={this.props.id}></label>
                    </div>
                    <div className="text">
                        <span>{this.props.text}</span>
                    </div>
                    <div 
                        className="remove" 
                        onClick={() => (
                            dispatch({
                                type: 'SHOW_MODAL_W',
                                data: {
                                    deleteManyItems: deleteManyItems,
                                    itemIdToBeDeleted: id
                                }
                            })
                        )}
                    ></div>
                    {this.props.editing ?
                        <input 
                            type="text" 
                            className="updateInput" 
                            onBlur={(e) => {
                                dispatch({
                                    type: 'UPDATE_ITEM_W', 
                                    data: {
                                        id: this.props.id,
                                        completed: this.props.completed,
                                        text: this.state.text
                                    }
                                }); 
                                dispatch({
                                    type: 'CHANGE_EDITING_W', 
                                    data: {
                                        id: this.props.id
                                    }
                                })
                            }} 
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