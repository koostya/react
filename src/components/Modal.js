import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                        onClick={() => {
                            dispatch({
                                type: 'SHOW_MODAL_W',
                                data: {
                                    deleteManyItems: null,
                                    itemIdToBeDeleted: null
                                }
                            })
                        }}
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
                            onClick={() => {
                                dispatch({
                                    type: 'REMOVE_ITEMS_ON_CONFIRM_MODAL_W',
                                    data: {
                                        itemIdToBeDeleted: itemIdToBeDeleted,
                                        deleteManyItems: deleteManyItems,
                                        user: user
                                    }
                                })
                            }}
                        >
                            Yes
                        </button>
                        <button 
                            className='cancel-but modal-but'
                            onClick={() => {
                                dispatch({
                                    type: 'SHOW_MODAL_W',
                                    data: {
                                        deleteManyItems: deleteManyItems,
                                        itemIdToBeDeleted: null
                                    }
                                })
                            }}
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
        user: localStorage.getItem('user')
    })
)(Modal);