import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'

export default class MyBlog extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="blog pt-5 pb-5">
                <Container className="pb-4">
                    <div className="text-center">
                        <h1>Our Blog</h1>
                        <p className="text-muted mb-5 mt-3">Far far away, behind the word mountains, far from the countries Vokalia and <br />Consonantia</p>
                    </div>
                    <div className="mt-5">
                        <Row>
                            <Col md="4" sm="12">
                                <Card>
                                    <img src="./assets/image_1.jpg" alt="" className="img-fluid " />
                                    <CardBody>
                                        <a href="#" className="title">
                                            Why Lead Generation is Key for Business Growth
                                        </a>
                                        <div className="content">
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                    </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4" sm="12">
                                <Card>
                                    <img src="./assets/image_2.jpg" alt="" className="img-fluid" />
                                    <CardBody>
                                        <a href="#" className="title">
                                            Why Lead Generation is Key for Business Growth
                                    </a>
                                        <div className="content">
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                    </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4" sm="12">
                                <Card>
                                    <img src="./assets/image_3.jpg" alt="" className="img-fluid" />
                                    <CardBody>
                                        <a href="#" className="title">
                                            Why Lead Generation is Key for Business Growth
                                    </a>
                                        <div className="content">
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                    </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}
