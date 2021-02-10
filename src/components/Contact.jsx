import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'reactstrap'

export default class Contact extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="contact pt-5 pb-5">
                <Container>
                    <div className="text-center">
                        <h1>Contact Me</h1>
                        <p className="text-muted mb-5 mt-3">Far far away, behind the word mountains, far from the countries Vokalia and <br />Consonantia</p>
                    </div>
                    <div className="">
                        <Row>
                            <Col md="6" sm="12">
                                <img src="assets/about.jpg" alt="" className="w-100"/>
                            </Col>
                            <Col md="6" sm="12">
                                <div className="mt-5">
                                    <div className="d-flex align-items-center"><div className="fw-600 mr-1 fs-20">Email:</div> aslamjon.ibragimov@gmail.com</div>
                                    <div className="d-flex align-items-center mt-2 mb-2"><div className="fw-600 mr-1 fs-20">Telegram:</div> <a href="https://t.me/i_am_anonim" target="_blank" className="text-decoration-none">@I_am_Anonim</a></div>
                                    <div className="d-flex align-items-center"><div className="fw-600 mr-1 fs-20">Phone number:</div> +998(91)541-19-98</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}
