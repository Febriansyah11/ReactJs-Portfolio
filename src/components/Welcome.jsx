import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { Button } from 'react-bootstrap'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import '../assets/style/component.css'

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            time: 0,
            button: true
        }
    }

    handleWelcome = () => {
        let welcome = document.getElementById('welcome')
        let text = document.getElementById('welcome-text')
        this.interval = setInterval(() => this.setState({ time: this.state.time + 1 }), 680);
        welcome.style.height = 0
        text.style.color = "#20b2aa"
        this.setState({
            button: false
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        if (this.state.time === 1) this.props.history.push('/dashboard');
        return (
            <div id='welcome' className="welcome-style shadow d-flex flex-column" >
                <h4 id="welcome-text" className="welcome-style-text text-raleway-welcome">Welcome, I'm Febriansyah </h4>
                {this.state.button === true ?
                    <Button id="btn-welcome" className="px-3 text-raleway-welcome-button" variant="outline" onClick={this.handleWelcome}>About me <ExpandLessIcon fontSize="large" className="welcome-icon" /></Button>
                    : null}
            </div>
        )
    }
}
export default withRouter(Welcome)