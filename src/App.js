import React, { Component } from "react";
import Me from "./imgs/majed.jpg";
import ImageViewer from "./component/ImageViewer";
import AccessMDHome from "./imgs/home.jpg";
import AccessMDMeasure from "./imgs/measurement.jpg";
import MywebappSplash from "./imgs/mywebapp_splash.png";
import MywebappMain from "./imgs/mywebapp_main.jpg";
import Clinicx from "./imgs/clinicx.png";
import { Row } from "react-bootstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="m-0 text-center">
        {/* Header Section */}
        <div className="header p-3">
          <div className="pb-5 mb-5">
            <img
              className="profile-pic rounded-circle"
              src={Me}
              alt="majed-img"
            />
            <h1 className="mt-4">Majed Nuseibeh</h1>
            <h2>Mobile application and Software Developer</h2>
          </div>
          <img
            src="http://erikdkennedy.com/r-r-r-random/divider-triangle.png"
            className="divider"
          />
        </div>
        {/* About Section */}
        <div className="mt-3 mx-auto w-75 text-left text-dark-blue">
          <h2 className="font-weight-bold">About</h2>
          <p>
            Graduated with B.Sc. degree in Computer Science, high programming
            skills in Java and C#, highly motivated, creative, high analytical
            skill, seeking challenges, Fast learner and team player.
            <br />I work with Native Android Development, Flutter Framework, and
            Web Development.
          </p>
        </div>
        {/* Portfolio Section */}
        <div className="text-dark-blue mt-5 text-center">
          <div className="w-75 mx-auto text-left">
            <h2 className="font-weight-bold">My Portfolio</h2>
          </div>
          <Row className="mt-5 mx-auto">
            <div className="col-12">
              <div className="w-75 mx-auto text-left">
                <h3>Access.md</h3>
                <ImageViewer srcs={[AccessMDHome, AccessMDMeasure]} />
              </div>
              <div className="text-left mt-5 w-75 mx-auto">
                <p>
                  Contributed in creating the mobile app of Access.md. <br />
                  The Goal of this application is to reduce the number of
                  hospital/clinic visits during a pandemic for people who do not
                  truly need it. This results in lower spread due to less
                  movement and less risk to frontline workers. This application
                  is a web/mobile app that allows doctors and patients to
                  followup their cases for COVID-19 and other pandemic
                  treatment. Doctors follow up a patient's case, checking their
                  symptoms, vitals, chatting with them, and providing
                  recommendations.
                </p>
                <p>
                  For more information visit us on
                  <a href="https://github.com/openmymed/access.md"> Github</a>
                </p>

                <h3>Technologies</h3>
                <p>Android, Java, Javalin, React.</p>
              </div>
            </div>
          </Row>
          <hr className="w-75"></hr>
          <Row className="mt-3 mx-auto">
            <div className="col-12">
              <div className="w-75 mx-auto text-left">
                <h3>Clincx</h3>
                <img className="w-100" src={Clinicx} alt="clincx-img" />
              </div>
              <div className="text-left mt-5 w-75 mx-auto">
                <p>
                  A Clinical Management System for gynaecological and obstetric
                  patients.
                  <br />
                  Doctors can record, search patients visits, and all the needed
                  information for pregnancy.
                </p>
                <h3>Technologies</h3>
                <p>Java, JavaFX, SQLite, Maven.</p>
              </div>
            </div>
          </Row>
          <hr className="w-75"></hr>
          <Row className="mt-5 mx-auto">
            <div className="col-12">
              <div className="w-75 mx-auto text-left">
                <h3>MyWebApp</h3>
                <ImageViewer srcs={[MywebappSplash, MywebappMain]} />
              </div>
              <div className="text-left mt-5 w-75 mx-auto">
                <p>
                  A Bilingual E-commerce android application built for shopping
                  online in English and Arabic for the Arabic marketplace.
                  <br />
                  Customers can pay with different payment method such as
                  Paypal, Cash on Delivery, etc..
                </p>
                <h3>Technologies</h3>
                <p>WordPress, WooCommerce, MySQL, PHP, Java for Android.</p>
              </div>
            </div>
          </Row>
        </div>
        <hr className="w-75"></hr>
        {/* Resume Section */}
        <div className="mt-3 mx-auto w-75 text-left text-dark-blue">
          <h6>
            You can find my{" "}
            <a href="https://drive.google.com/file/d/1IQ4DS-64Y3Q3kDYMU93uFe6WbNnkvnQo/view?usp=sharing">
              Resume
            </a>{" "}
            & <a href="https://www.linkedin.com/in/majednuseibeh">LinkedIn</a>
          </h6>
          <h6>
            Email:{" "}
            <a href="mailto:majednuseibeh@gmail.com">majednuseibeh@gmail.com</a>
          </h6>
        </div>
        {/* Footer Section */}
        <div className="mt-5 p-1 text-left bg-dark-blue">
          <p>© 2020 Majed Nuseibeh.</p>
        </div>
      </div>
    );
  }
}

export default App;
