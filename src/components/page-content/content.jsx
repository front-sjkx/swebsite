import React, { Component } from 'react'
import './content.scss'
import './css/base.scss'
// import '../../utils/play'
export default class Content extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.documentElement.className = "js"; var supportsCssVars = function () { var e, t = document.createElement("style"); return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e }; supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");
    }
    render() {
        return (
            <div className='page-content'>
                <div className="section-content">
                    <div className="wt-container">
                        <div className='intro-text'>
                            <div className='pre-text'>数据科学与技术学院</div>
                            <div><h1>科技创新协会</h1></div>
                        </div>
                        <div className='play'>
                            <div className="frame">
                                <div className="frame__title-wrap">
                                    <h1 className="frame__title">Interactive Particles</h1>
                                </div>
                                <a className="frame__github" href="https://github.com/brunoimbrizi/interactive-particles">GitHub</a>
                                <div className="frame__links">
                                    <a className="https://tympanus.net/Development/AnimatedMeshLines/">Previous Demo</a>
                                    <a className="https://tympanus.net/codrops/?p=37503">Article</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}