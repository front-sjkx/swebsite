import React, { Component } from 'react'
import logo from '../../assets/logo.png'
import './nav.scss'
import { Icon } from 'antd'

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1552045_ysm7crtsmi.js',
});

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='header'>
                <header className='menu'>
                    <div className="headerContent">
                        {/* <a href="/"> */}
                        <img src={logo} alt="logo" />
                        {/* </a> */}
                    </div>
                    <div className='icon'>
                        <IconFont type="icon-user1" style={{ fontSize: '26px', color: '#fff' }} />
                    </div>
                </header>

            </div>
        )
    }
}


