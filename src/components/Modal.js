import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeItem, showModal } from '../actions/actions';

class Modal extends Component {

    render() {
        const { dispatch, items } = this.props
        return(
            <div className='confirm-modal-wrap'>
                <div 
                    className='confirm-modal-bg'
                >
                    <div 
                        className='close-modal-bg'
                        onClick={() => {dispatch(showModal(this.props.itemID))}}
                    >
                    </div>
                    <div className='confirm-modal-inner'>
                        <div className='modal-text'>
                            Are you sure, that you want to remove <span>"{this.props.itemText}"</span>?
                        </div>
                        <button 
                            className='confirm-but modal-but'
                            onClick={() => {dispatch(removeItem(this.props.itemID)); console.log(this.props.itemID)}}
                        >
                            Yes
                        </button>
                        <button 
                            className='cancel-but modal-but'
                            onClick={() => {dispatch(showModal(this.props.itemID))}}
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
        items: state.store.items
    })
)(Modal);