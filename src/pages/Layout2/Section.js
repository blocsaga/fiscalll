import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

//import images
import HomeUrl from '../../assets/images/home-border.png';
class Section extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-home home-bg-2" id="home">
          <div className="bg-overlay"></div>
          <div className="home-center">
            <div className="home-desc-center">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={9}>
                  <div className="home-content">
                      <p className="mb-0">Company Management</p>
                      <img src={HomeUrl} height="15" alt="" />
                      <h1 className="home-title mt-4">Manage Your Business<br /> Accounting & Taxation </h1>
                      <p className="text-muted mt-4 f-20">Tired of wasting valuable client-time on spreadsheets, paperwork, and tax returns? The tools in our accounting and tax app help you do all of your financial admin in a fraction of the time</p>
                      <div className="mt-4 pt-2">
                        <Link to="#" className="btn btn-primary mr-3">Contact Us</Link>{" "}
                        <Link to="#" className="video-play-icon text-dark" onClick={this.openModal}><i className="mdi mdi-play-circle-outline text-dark mr-2"></i>Watch Intro Video</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              <ModalVideo
                channel="vimeo"
                isOpen={this.state.isOpen}
                videoId="99025203"
                onClose={() => this.setState({ isOpen: false })}
              />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
