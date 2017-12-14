import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    handler = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    inputEnter = (e) => {
        if(e.key === 'Enter') {
            this.props.dispatch({type: 'ADD_ITEM_W', data: {
                id: this.generateID(),
                text: e.target.value,
                completed: false,
                editing: false,
                userName: this.props.user
            }})

            this.setState({
                text: ''
            });
        } else {
            this.setState({
                text: e.target.value
            });
        }
    }

    generateID = () =>  new Date().getTime()


    render() {
        const { items, dispatch, chooseAllChecked } = this.props;
        const { text } = this.state;
        return(
            <div className="input_wrapper main_input_wrapper">
                <input 
                    type="text" 
                    placeholder="What needs to be done?" 
                    id="main_input" 
                    onChange={(e) => (this.handler(e))} 
                    onKeyPress={(e) => (this.inputEnter(e))}
                    value={text} 
                />
                {items.length > 0 ?
                    <div className="choose_all">
                        <input 
                            type="checkbox" 
                            id="choose_all" 
                            onChange={(e) => {dispatch({type: 'SET_ALL_ITEMS_CHECKED_W', data: {allChecked: e.target.checked}})}}
                            checked={chooseAllChecked ? 'checked' : ''}
                        />
                        <label htmlFor="choose_all"></label>
                    </div>
                    :
                    ''
                }
            </div>
        );
    }
}

export default connect(
    state => ({
        items: state.item.items,
        chooseAllChecked: state.item.chooseAllChecked,
        user: localStorage.getItem('user')
    })
)(Input);