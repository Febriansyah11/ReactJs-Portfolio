import React, { Component } from 'react'
import "video-react/dist/video-react.css"
import { Card } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import '../assets/style/component.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import FutsalBg from '../assets/image/futsalBg1.png'
import futsal0 from '../assets/image/futsal0.png'
import futsal1 from '../assets/image/futsal1.png'
import futsal2 from '../assets/image/futsal2.png'
import Github from '../assets/image/Github.svg'
import logoBlog from '../assets/image/blog.png'
import { Player } from 'video-react'
import Video from '../assets/video/blogger.mp4'

function Modal1(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Carousel>
                <Carousel.Item className="py-5 bg-dark">
                    <img
                        className="d-block w-100"
                        src={futsal0}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>As user</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="py-5 bg-dark">
                    <img
                        className="d-block w-100"
                        src={futsal1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>As user</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="py-5 bg-dark">
                    <img
                        className="d-block w-100"
                        src={futsal2}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <h3>As admin</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Modal>
    )
}
function Modal2(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Player
                playsInline
                poster="/assets/poster.png"
                src={Video}
            />
        </Modal>
    )
}

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal1: false,
            showModal2: false
        }
    }


    render() {
        console.log(this.state.showModal1, "modall 1");

        return (
            <div className="d-flex flex-row flex-wrap justify-content-center text-raleway-about text-dark p-xl-5 p-lg-5 p-1 overflow-scroll">
                <Card
                    className="text-center shadow m-1"
                    style={{ width: '19rem' }}>
                    <Card.Body>
                        <Card.Title > Futsal Field Booking </Card.Title>
                        <Card.Img variant="top" src={FutsalBg} />
                        <Button color="primary" style={{ width: 200 }} onClick={() => this.setState({ showModal1: true })}>Show more</Button>
                    </Card.Body>
                </Card>
                <Card
                    className="text-center shadow m-1"
                    style={{ width: '19rem' }}
                    bg="info"
                >
                    <Card.Body>
                        <Card.Title> Blog </Card.Title>
                        <Card.Img variant="top" src={logoBlog} className="my-5" />
                        <Button color="primary" style={{ width: 200 }} onClick={() => this.setState({ showModal2: true })}>Show more</Button>
                    </Card.Body>
                </Card>
                <Card
                    className="text-center shadow m-1"
                    style={{ width: '19rem' }}
                >
                    <Card.Body>
                        <Card.Title>Another project on my github </Card.Title>
                        <Card.Img variant="top" src={Github} style={{ width: '13.4rem', height: '13.4rem' }} />
                        <Button color="primary" onClick={e => window.location.href = 'https://github.com/Febriansyah11'} style={{ width: 200 }}>Show more</Button>

                    </Card.Body>
                </Card>
                <Modal1
                    show={this.state.showModal1}
                    onHide={() => this.setState({ showModal1: false })}
                />
                <Modal2
                    show={this.state.showModal2}
                    onHide={() => this.setState({ showModal2: false })}
                />
            </div>
        )
    }
}
