import React, { Component } from 'react';
import {Link} from 'react-router'

class Banner extends Component {

    renderButtons(buttonInfo, key) {
        let {title, onClick, visible, link} = buttonInfo;
        return (visible) ? <Link to={link}><button className="ui button" onClick={onClick}> {title}</button> </Link>: <div></div>
    }

    render() {
        let {buttons} = this.props

        return (
            <div className="App-header">
                <h2>Welcome to Work With Me</h2>

                <div class="large ui buttons right">

                {buttons.map(this.renderButtons) }
                </div>

            </div>
        )
    }

}

export default Banner;



