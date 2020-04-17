import React, { Component, Fragment } from 'react'
import ReactSpinner from '../logo.svg'
import photo from '../assets/image/photo.svg'
import Portfolio from './Portfolio';
import About from './About';
import Flower from '@material-ui/icons/LocalFlorist';
import Footer from './Footer';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            time: 1,
            loading: true
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: this.state.time += 1 }), 1000);
    }

    handleClickHref = () => {
        window.location.href('https://blkbekasi.kemnaker.go.id/')
    }

    render() {
        console.log(this.state.time, "time render");
        if (this.state.time === 2) {
            clearInterval(this.interval)
            this.setState({
                loading: false,
                time: 0
            })
        }
        return (
            <Fragment>
                {this.state.loading === true ?
                    <div className="row justify-content-center align-content-center vh-100">
                        <img className="App-logo" src={ReactSpinner} alt="react-loading" />
                    </div>
                    :
                    <div className="d-flex flex-column">
                        <div id="dashboard" className="dashboard d-flex justify-content-center align-items-center p-5">
                            <div className="d-flex flex-column justify-content-center align-items-center dash-febri">
                                <img height="300" width="300" src={photo} alt="febriansyah adi putra" />
                                <p className="m-1 text-raleway-febri text-center">Febriansyah Adi Putra</p>
                                <p className="m-1 text-raleway-febri text-center">Web Developer & Backend Developer</p>
                            </div>
                        </div>
                        <div className="dashboard dash-port bg-white d-flex flex-column justify-content-start align-items-center p-5 ">
                            <div id="portfolio" className="d-flex flex-column align-items-center justify-content-center">
                                <p className="m-2 mb-xl-5 mb-lg-5 text-raleway-dashboard"><Flower />&nbsp;PORTFOLIO&nbsp;<Flower /></p>
                                <Portfolio />
                            </div>
                        </div>
                        <div className="dashboard dash-bout d-flex flex-column justify-content-start align-items-center p-5 ">
                            <div id="about" className="d-flex flex-column align-items-center justify-content-center">
                                <p className="m-2 mb-xl-5 mb-lg-5 text-raleway-dashboard text-white"><Flower />&nbsp;ABOUT&nbsp;<Flower /></p>
                                <About />
                            </div>
                        </div>
                        <Footer />
                    </div>
                }
            </Fragment>
        )
    }
}


export default Dashboard