import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./../App.css";

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    if (this.state.width < 700) {
      return (
        <Carousel className="mx-auto">
          <Carousel.Item>
            <img className="w-100" src={this.props.srcs[0]} alt="app-pic"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img className="w-100" src={this.props.srcs[1]} alt="app-pic"></img>
          </Carousel.Item>
        </Carousel>
      );
    } else {
      return (
        <div className="mx-auto mt-4">
          <img
            className="mr-2 app-img"
            src={this.props.srcs[0]}
            alt="app-pic"
          />
          <img className="app-img" src={this.props.srcs[1]} alt="app-pic" />
        </div>
      );
    }
  }
}
export default ImageViewer;
