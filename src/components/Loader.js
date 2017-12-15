import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loader extends Component {
    render() {
        return(
            <div className="loader_wrap">
                <div className="loader">

                </div>
            </div>
        );
    }
}

export default connect(state => ({
})
)(Loader);