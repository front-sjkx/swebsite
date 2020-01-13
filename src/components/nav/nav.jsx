import React, {Component} from 'react'
import logo from '../../assets/logo.png'
import './nav.scss'
import {Icon, Button} from 'antd'
import SignIn from "../singIn/signIn";


const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1552045_ysm7crtsmi.js',
});

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            register: false,
        };
        this.handleRegisterCancel = this.handleRegisterCancel.bind(this);
        this.showRegisterModal = this.showRegisterModal.bind(this);
    }

    showRegisterModal() {
        // this.onClose();
        this.setState({
            register: true,
        });
    }

    handleRegisterCancel() {
        this.setState({
            register: false,
        });
    }

    render() {
        return (
            <div className='header'>
                <header className='menu'>
                    <div className="headerContent">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className='icon'>
                        <Button type={'circle'} icon={'user'} onClick={this.showRegisterModal}></Button> <Button
                        type={'circle'} icon={'home'}></Button>
                    </div>
                </header>
                <SignIn visible={this.state.register}
                        handleCancel={this.handleRegisterCancel}/>
            </div>
        )
    }
}


