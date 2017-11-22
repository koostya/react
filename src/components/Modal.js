import React, { Component } from 'react';
import { connect } from 'react-redux';

class Modal extends Component {

    render() {
        return(
            <div className='confirm-modal-wrap'>
                <div className='confirm-modal-bg'>
                    <div className='confirm-modal-inner'>
                        <div className='modal-text'>
                            Are you sure, that you want to remove this item?
                        </div>
                        <div 
                            className='confirm-but modal-but'
                        >
                            Yes
                        </div>
                        <div 
                            className='cancel-but modal-but'
                        >
                            No
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({})
)(Modal);