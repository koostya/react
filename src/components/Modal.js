import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showModal, confirmModal } from '../actions/actions';

class Modal extends Component {
    render() {
        const { dispatch, itemsForeRemovingLength, isVisible, deleteManyItems, itemIdToBeDeleted, user } = this.props
        return isVisible ? (
            <div className='confirm-modal-wrap'>
                <div 
                    className='confirm-modal-bg'
                >
                    <div 
                        className='close-modal-bg'
                        onClick={() => {dispatch(showModal())}}
                    >
                    </div>
                    <div className='confirm-modal-inner'>
                        <div className='modal-text'>
                            Are you sure, that you want to remove 
                            <span>{this.props.deleteManyItems ? 
                                ' ' + itemsForeRemovingLength + ' item' : 
                                ' item '}
                            </span>
                            ?
                        </div>
                        <button 
                            className='confirm-but modal-but'
                            onClick={() => {dispatch(confirmModal(itemIdToBeDeleted, deleteManyItems, user))}}
                        >
                            Yes
                        </button>
                        <button 
                            className='cancel-but modal-but'
                            onClick={() => {dispatch(showModal())}}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        ) : null;
    }
}

export default connect(
    state => ({
        items: state.item.items,
        itemsForeRemovingLength: state.item.items.filter((item) => (item.completed === true)).length,
        isVisible: state.modal.modal,
        deleteManyItems: state.modal.deleteManyItems,
        itemIdToBeDeleted: state.modal.itemIdToBeDeleted,
        user: state.modal.user
    })
)(Modal);
``