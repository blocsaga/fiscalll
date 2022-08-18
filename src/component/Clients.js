import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import Slider from "react-slick";

import Img1 from '../assets/images/testi-img/img-1.png';
import Img2 from '../assets/images/testi-img/img-2.png';
import Img3 from '../assets/images/testi-img/img-3.png';
import Img4 from '../assets/images/testi-img/img-4.png';

import HomeUrl from '../assets/images/home-border.png';

import Client1 from '../assets/images/clients/1.png';
import Client2 from '../assets/images/clients/2.png';
import Client3 from '../assets/images/clients/3.png';
import Client4 from '../assets/images/clients/4.png';

export default class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideitems: [
        {
          id: 100,
          img: Img1,
          name: 'Surya Rai',
          designation: 'HandCraft Artist',
          description: 'Surya, 13, sell his funky and creative socks to elevate people’s style while also helping the Juvenile Diabetes Research Fund and Autism Speaks. Since 2014,his business has partnered with schools across the U.S. to provide socks for school fundraisers.'
        },
        {
          id: 101,
          img: Img2,
          name: 'Amar Pun',
          designation: 'Neptop Founder',
          description: 'One of Amar Nepati’s (Nepati is featured on News 24’s Shark Tank) investments is eco-friendly body products company Neptop. Neptop Drops are single-use, water-soluble packets containing shampoo, conditioner, body wash or shaving cream.'
        },
        {
          id: 103,
          img: Img3,
          name: 'Lalita K.C',
          designation: 'Founder',
          description: 'Known as Nepal’s youngest entrepreneur, Lalita K.C, age 14, makes and sells her handmade candles through her company,'
        },
        {
          id: 104,
          img: Img4,
          name: 'Vidhushi Sing',
          designation: 'CEO',
          description: 'Vidhushi Sing started Padforme when she was in high school as a way to help high school students connect with opportunities to help them decide on a career, build their network and develop their passions before going to college. '
        },
      ],
    };
  }
  render() {

    var slidesettings = {
      dots: true,
      speed: 300,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay:true,
      dotsClass: "slick-dots slick-thumb carousel-indicators",
      customPaging: function (i) {
        return (
          <img src={process.env.PUBLIC_URL + '/images/img-' + (i+1) +'.jpg'} alt="" className=" testi-img img-fluid rounded mx-auto d-block" />
        );
      },
    };

    const clientslides = this.state.slideitems.map((slideitem, clientkey) => {
      return (
        <div className="carousel-item" key={slideitem.id}>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="client-box mt-4">
                <h5 className="line-height_1_6">{slideitem.description}</h5>
                <div className="client-icon">
                  <i className="mdi mdi-format-quote-close"></i>
                </div>
                <h5 className="f-18">{slideitem.name} </h5>
                <p className="text-primary mb-0">- {slideitem.designation} </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-center mt-4">
                <img src={slideitem.img} className="img-fluid" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      );
    });

    return (
      <React.Fragment>
        <section className="section" id="clients">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Clients Loved Products</h3>
                  <p className="text-muted f-17 mt-3">Vivamus ac nulla ultrices laoreet neque mollis mi morbi
                  elementum mauris
                            sit amet arcu <br /> fringilla auctor In eleifend maximus nisi sed vulputate.</p>

                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              <Col lg="12">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <Slider {...slidesettings}>
                      {clientslides}
                    </Slider>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section bg-light bg-clients">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">All Trusted Brands</h3>
                  <p className="text-muted f-17 mt-3">Vivamus ac nulla ultrices laoreet neque mollis mi morbi
                  elementum mauris
                            sit amet arcu <br /> fringilla auctor In eleifend maximus nisi sed vulputate.</p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              <Col lg={3}>
                <div className="client-images mt-4">
                  <img src={Client1} alt="logo-img" className="mx-auto img-fluid d-block" />
                </div>
              </Col>
              <Col lg={3}>
                <div className="client-images mt-4">
                  <img src={Client2} alt="logo-img" className="mx-auto img-fluid d-block" />
                </div>
              </Col>
              <Col lg={3}>
                <div className="client-images mt-4">
                  <img src={Client3} alt="logo-img" className="mx-auto img-fluid d-block" />
                </div>
              </Col>
              <Col lg={3}>
                <div className="client-images mt-4">
                  <img src={Client4} alt="logo-img" className="mx-auto img-fluid d-block" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
