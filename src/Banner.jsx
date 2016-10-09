import React, { Component } from 'react';
import {Link} from 'react-router';
import './Banner.css';
import Home from './Home';

class Banner extends Component {

    renderButtons(buttonInfo, key) {
        let {title, onClick, visible, link} = buttonInfo;
        return (visible) ? <Link to={link}><button className="ui button" onClick={onClick}> {title}</button> </Link>: <div></div>
    }

    render() {
        let {buttons} = this.props

        return (
            <div>
                <Link to={Home}><h2>Welcome to Work With Me</h2></Link>
                <div class="large ui buttons right">

                {buttons.map(this.renderButtons) }
                </div>

            </div>
        )
    }

}

export default Banner;



