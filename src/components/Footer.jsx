import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'reactstrap'

export default class Footer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="footer pt-4 pb-4">
                <footer>
                    <Container>
                        <Row>
                            <Col md="3" sm="6">
                                <div className="bold text-white mb-3 fs-24">Lets talk about</div>
                                <p className="color">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <ul className="list-unstyled">
                                    <li></li>
                                </ul>
                            </Col>
                            <Col md="3" sm="6">
                                <div className="bold text-white mb-3 fs-24">Links</div>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="text-decoration-none color d-flex align-items-center">
                                            <span className="icon rightArrow mr-1"></span>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none color d-flex align-items-center">
                                            <span className="icon rightArrow mr-1"></span>
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none color d-flex align-items-center">
                                            <span className="icon rightArrow mr-1"></span>
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none color d-flex align-items-center">
                                            <span className="icon rightArrow mr-1"></span>
                                            Projects
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none color d-flex align-items-center">
                                            <span className="icon rightArrow mr-1"></span>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                            <Col md="3" sm="6">
                                <div className="bold text-white mb-3 fs-24">Services</div>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="text-decoration-none color d-flex align-items-center">
                                            <span className="icon rightArrow mr-1"></span>
                                            Web Design
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none color d-flex align-items-center">
                                            <span className="icon rightArrow mr-1"></span>
                                            Web Development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none color d-flex align-items-center">
                                            <span className="icon rightArrow mr-1"></span>
                                            Business Strategy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none color d-flex align-items-center">
                                            <span className="icon rightArrow mr-1"></span>
                                            Data Analysis
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-decoration-none color d-flex align-items-center">
                                            <span className="icon rightArrow mr-1"></span>
                                            Graphic Design
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                            <Col md="3" sm="6">
                                <div className="bold text-white mb-3 fs-24">Social media</div>
                                <ul className="list-unstyled d-flex">
                                    <li>
                                        <a href="#" className="social center">
                                            <span className="icon img1"></span>
                                        </a>
                                    </li>
                                    <li className="ml-3 mr-3">
                                        <a href="#" className="social center">
                                            <span className="icon img2"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social center">
                                            <span className="icon img3"></span>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        )
    }
}
