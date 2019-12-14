import React, { Component } from 'react'
import './content.scss'
import Play from '../play/play'
import Menu from '../menu/menu'
import Texty from 'rc-texty'
import 'rc-texty/assets/index.css';
import Video from '../video/video'
export default class Content extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        show: true,
        mode: 'smooth',
        type: 'left',
    };
    getEnter = (e) => {
        switch (e.index) {
            case 0:
                return {
                    rotate: 90,
                    opacity: 0,
                    y: -60,
                };
            case 10:
            case 1:
                return {
                    y: -60,
                    x: -10,
                    opacity: 0,
                };
            case 9:
            case 2:
                return {
                    y: -60,
                    x: 20,
                    opacity: 0,
                };
            case 3:
                return {
                    y: 60,
                    opacity: 0,
                };
            case 8:
            case 4:
                return {
                    x: 30,
                    opacity: 0,
                };
            case 5:
                return {
                    enter: [
                        {
                            scale: 2,
                            opacity: 0,
                            type: 'set',
                        },
                        { scale: 1.2, opacity: 1, duration: 300 },
                        { scale: 0.9, duration: 200 },
                        { scale: 1.05, duration: 150 },
                        { scale: 1, duration: 100 },
                    ],
                    leave: {
                        opacity: 0, scale: 0,
                    },
                };
            case 6:
                return {
                    scale: 0.8,
                    x: 30,
                    y: -10,
                    opacity: 0,
                };
            case 7:
                return {
                    scale: 0.8,
                    x: 30,
                    y: 10,
                    opacity: 0,
                };
            default:
                return {
                    opacity: 0,
                };
        }
    }
    render() {
        return (
            <div className='page-content'>
                <div className="section-content-black">

                    <div className="wt-container">
                        <div className='intro-text'>
                            <Texty className='pre-text'
                                enter={this.getEnter}>
                                {this.state.show && '数据科学与技术学院'}
                            </Texty>
                            <Texty className='h1' type={this.state.type}
                                mode={this.state.mode} component='h1' >科技创新协会
                                </Texty>
                        </div>
                        <Play />
                    </div>
                    <div className='menu'>
                        <Menu />
                    </div>

                </div>
                <div className="section-content-white">
                    <div className='video-container'>
                        <Video />
                    </div>
                    <div className="wt-container">
                       
                    </div>
                </div>
            </div>

        )
    }
}