import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./assets/css/footer.css";

function FooterNASA() {
    return (
        <footer className='text-center text-white footer-custom'>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center mb-4'>
                        <div style={{ maxWidth: '460px', width: '100%' }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                                <iframe
                                    title="YouTube Nasa"
                                    src="https://www.youtube.com/embed/21X5lGlDOfg"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                ></iframe>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr class="no-margin"></hr>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright: 
                <a className='text-white' href='#'>
                    {" Nasa da Shope "}
                </a>
            </div>
        </footer>
    );
}

export default FooterNASA;
