import React, { Component } from 'react'
import Nav from '../nav/nav'
import Content from '../page-content/content'
import { Button, notification, Icon } from 'antd'
import SignIn from '../singIn/signIn'
export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        visible: false,
    };
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
                    setTimeout(() => {
                        this.setState({
                            visible: true,
                        })
                    })
                    console.log(this.state.visible)
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
                key,
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
                <Nav />
                <Content />
                <SignIn visible={this.state.visible} />
            </div>
        )

    }
}