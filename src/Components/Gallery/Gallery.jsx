import React, {Component} from 'react';
import images from './data'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from '../Button/Button';
import './Images.scss'

class Gallery extends Component {

    state = {images,
        limit: 4}

    handleClick = (e) => {
        this.setState((state) => {return {limit: this.state.limit + 4}});
        window.scrollBy({
            top: 500,
            left: 0,
            behavior: 'smooth'
        })
    }

    render() {
        return(
        <Container fluid className="gallery" id="gallery">
        <Container>

            <Row className="justify-content-center">
                <h2 className="text-danger mt-5">A tak się bawiliśmy:</h2>
            </Row>
            <Row>
                {this.state.images.slice(0, this.state.limit)
                .map((img, index) => {
                    return <Col key={index} className="col-6 p-4">
                        <Image className="images" src={img.path}/>
                    </Col>
                })}
            </Row>
            <Row className="justify-content-center">
                <Button onClick={this.handleClick} kind="primary" text="Więcej Zdjęć"/>
            </Row>
        </Container>
            
        </Container>
        )
    }
}

export default Gallery;
