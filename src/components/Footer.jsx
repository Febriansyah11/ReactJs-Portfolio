import React, { Component } from 'react'
import { Navbar, Form, FormControl, FormGroup, Button } from 'react-bootstrap'
import Flower from '@material-ui/icons/LocalFlorist';
import '../assets/style/component.css'
import Swal from 'sweetalert2'
import axios from 'axios'


export default class Footer extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        console.log(this.state, "cdn");

    }

    handleChange = (e) => {
        console.log(e.target.value, "onChange");
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        // this.componentDidMount()
        e.preventDefault()
        const { name, email, message } = this.state
        axios.post('/api/form', {
            name,
            email,
            message
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    render() {
        return (
            <Navbar id="contact" collapseOnSelect expand="lg" sticky="bottom" bg="dark" variant="dark" className="dashboard d-flex flex-column justify-content-start align-items-center p-xl-5 p-lg-5 p-1 text-raleway-about">
                <p className="m-2 mb-xl-5 mb-lg-5 text-raleway-dashboard text-white text-center"><Flower />&nbsp;CONTACT ME&nbsp;<Flower /></p>
                <Form onSubmit={this.handleSubmit} className="w-50 bg-dark d-flex flex-column justify-content-center align-items-center text-white">
                    <FormGroup className="w-100" controlId="formBasicText">
                        <FormControl name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Your Name" />
                    </FormGroup>
                    <FormGroup className="w-100" controlId="formBasicEmail">
                        <FormControl name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Example@mail.com" />
                    </FormGroup>
                    <FormGroup className="w-100" controlId="exampleForm.ControlTextarea1">
                        <FormControl as="textarea" rows="3" name="message" type="textarea" value={this.state.message} onChange={this.handleChange} placeholder="Your Message" />
                    </FormGroup>
                    <Button type="submit" className="w-100">Send</Button>
                </Form>
            </Navbar>
        )
    }
}