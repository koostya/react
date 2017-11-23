import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeItem, showModal, multipleDeliting } from '../actions/actions';

class Modal extends Component {

    removeManyItems = () => {
        let items = this.props.items;

        for(let i = 0; i < items.length; i++) {
            if(items[i].completed === true) {
                this.props.dispatch(removeItem(items[i].id, false));
            }
        }
    }

    render() {
        const { dispatch, items, itemsForeRemovingLength } = this.props
        return(
            <div className='confirm-modal-wrap'>
                <div 
                    className='confirm-modal-bg'
                >
                    <div 
                        className='close-modal-bg'
                        onClick={() => {this.props.deleteManyItems ? 
                            dispatch(multipleDeliting(false)) : 
                            dispatch(showModal(this.props.itemID))}}
                    >
                    </div>
                    <div className='confirm-modal-inner'>
                        <div className='modal-text'>
                            Are you sure, that you want to remove 
                            <span>{this.props.deleteManyItems ? 
                                ' ' + itemsForeRemovingLength + ' item' : 
                                ' "' + this.props.itemText + '" '}
                            </span>
                            ?
                        </div>
                        <button 
                            className='confirm-but modal-but'
                            onClick={() => {this.props.deleteManyItems ? 
                                this.removeManyItems() : 
                                dispatch(removeItem(this.props.itemID))}}
                        >
                            Yes
                        </button>
                        <button 
                            className='cancel-but modal-but'
                            onClick={() => {this.props.deleteManyItems ? 
                                dispatch(multipleDeliting(false)) : 
                                dispatch(showModal(this.props.itemID))}}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        items: state.store.items,
        itemsForeRemovingLength: state.store.items.filter((item) => (item.completed === true)).length
    })
)(Modal);