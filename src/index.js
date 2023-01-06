import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css'
import домик from './images/дом.png'


class App extends Component {

    constructor(props) {
        super(props)
        this.refToMenuContainer = React.createRef()
        this.refToMenuButton = React.createRef()
        this.state = {
            offset: 0,
            rotateDegress: 0
        }
    }

    menuContainerWidth = 0
    menuButton = 0


    componentDidMount = () => {
        this.menuContainerWidth = this.refToMenuContainer.current.clientWidth
        this.menuButton = this.refToMenuButton.current
    }

    doMenuIsOpen = false

    openMenu = () => {
        if (this.doMenuIsOpen === false) {
            this.doMenuIsOpen = true
            this.setState(() => {
                return {
                    offset: this.menuContainerWidth,
                    rotateDegress: 0
                }
            })
        } else if (this.doMenuIsOpen === true) {
            this.doMenuIsOpen = false
            this.setState(() => {
                return {
                    offset: 0,
                    rotateDegress: 90
                }
            })
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="menu-burger">
                        <div className="button" onClick={ this.openMenu } style={{ transform: `rotate(${this.state.rotateDegress}deg)` }}>
                            <p>&mdash;</p>
                            <p>&mdash;</p>
                            <p>&mdash;</p>
                        </div>
                        <div className="menu-container" ref={ this.refToMenuContainer }>
                            <div className="menu" style={{ right: this.state.offset }}>
                                <div className="menu-item">
                                    <img src={ домик } alt="" />
                                </div>
                                <div className="menu-item">
                                    <img src={ домик } alt="" />
                                </div>
                                <div className="menu-item">
                                    <img src={ домик } alt="" />
                                </div>
                                <div className="menu-item">
                                    <img src={ домик } alt="" />
                                </div>
                                <div className="menu-item">
                                    <img src={ домик } alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.App')
)
