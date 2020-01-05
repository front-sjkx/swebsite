import React, {Component} from 'react'
import Nav from '../nav/nav'
import Content from '../page-content/content'
import Footer from "../footer/footer";
import {Button, notification} from 'antd'
import SignIn from '../singIn/signIn'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            register: false,
        };
        this.handleRegisterCancel = this.handleRegisterCancel.bind(this);
        this.showRegisterModal = this.showRegisterModal.bind(this);
    }


    handleRegisterCancel() {
        this.setState({
            register: false,
        });
    }

    showRegisterModal() {

        this.setState({
            register: true,
        });
    }

    componentDidMount() {
        const close = () => {
            console.log(
                'hello,Welcome to join in us!',
            );
        };
        const openNotification = () => {

            const key = `open${Date.now()}`;
            const btn = (
                <Button type="dashed" size="small" onClick={() => {

                    this.showRegisterModal();
                    notification.close(key)
                }}>
                    Join in
                </Button>
            );
            notification.open({
                message: 'Hello Word',
                description:
                    '欢迎加入数据科协！',
                btn,
                key:1,
                onClose: close,
                placement: 'bottomRight',
                style: {
                    textAlign: 'center',
                    fontSize: '22px'

                },
                bottom: '0',
                duration: 10,
            });
        };
        openNotification('bottomRight')

    }

    render() {
        return (
            <div>
                <Nav/>
                <Content/>

                <SignIn visible={this.state.register}
                        handleCancel={this.handleRegisterCancel}/>
            </div>
        )

    }
}
