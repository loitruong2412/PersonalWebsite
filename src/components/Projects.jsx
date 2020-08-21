import React from "react";

// reactstrap components
import {
  Container,
  Col,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";

// core components
import ProjectHeader from './ProjectHeader';
import Footer from "./Footer";

export default function Projects() {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <ProjectHeader />
        <div className="section">
          <Container>
            <Col className="ml-auto mr-auto" md="12" sm="auto">
              <CardGroup style={{ width: "100%" }}>
                <Card className="text-center" style={{ width: "30rem", margin: "2rem" }}>
                  <CardImg top src={require("../assets/img/projects/spendwise.png")} alt="..." />
                  <CardBody>
                    <CardTitle tag="h4">Spendwise</CardTitle>
                    <CardSubtitle>MERN stack</CardSubtitle>
                    <CardText>A fullstack web app using MERN stack with basic CRUD features and Mongoose schema for the back end that allows users to track income and expenses, and provides visualizations in the form of React charts.</CardText>
                    <Button
                      color="info"
                      target="_blank"
                      href="https://github.com/loitruong2412/Academic-Projects/tree/master/Spendwise-MERN%20stack"
                    >
                      Github
                    </Button>
                    <Button
                      color="info"
                      target="_blank"
                      href="https://spendwise-ui.herokuapp.com"
                    >
                      Deployed App
                    </Button>
                  </CardBody>
                </Card>
                <Card className="text-center" style={{ width: "30rem", margin: "2rem" }}>
                  <CardImg top src={require("../assets/img/projects/bobaorbust.png")} alt="..." />
                  <CardBody>
                    <CardTitle tag="h4">Boba or Bust</CardTitle>
                    <CardSubtitle>Java - Android Studio</CardSubtitle>
                    <CardText>An interactive Android bubble tea-themed mobile game that utilizes accelerometer sensor to allow users to tilt their device to catch the bubbles and stores users’ high scores using SQLite.</CardText>
                    <Button
                      color="info"
                      target="_blank"
                      href="https://github.com/loitruong2412/Academic-Projects/tree/master/BobaorBust"
                    >
                      Github
                    </Button>
                    <Button
                      color="info"
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.mukhi.bobaorbust&hl=en_US"
                    >
                      Deployed App
                    </Button>
                  </CardBody>
                </Card>
                <Card className="text-center" style={{ width: "30rem", margin: "2rem" }}>
                  <CardImg top src={require("../assets/img/projects/personalweb.png")} alt="..." />
                  <CardBody>
                    <CardTitle tag="h4">Personal Website</CardTitle>
                    <CardSubtitle>JavaScript, HTML, CSS</CardSubtitle>
                    <CardText>A simple personal website I made using basic JavaScript, HTML and CSS as part of my web dev class. This was created before I was introduced to MERN stack.</CardText>
                    <Button
                      color="info"
                      target="_blank"
                      href="https://github.com/loitruong2412/Academic-Projects/tree/master/PersonalWebsite-LoiTruong"
                    >
                      Github
                    </Button>
                    <Button
                      color="info"
                      target="_blank"
                      href="https://loi-truong-personal-website.herokuapp.com"
                    >
                      Visit
                    </Button>
                  </CardBody>
                </Card>
              </CardGroup>
              <CardGroup style={{ width: "100%" }}>
                <Card className="text-center" style={{ width: "30rem", margin: "2rem" }}>
                  <CardImg top src={require("../assets/img/projects/fse.png")} alt="..." />
                  <CardBody>
                    <CardTitle tag="h4">Interactive Painting App</CardTitle>
                    <CardSubtitle>C++</CardSubtitle>
                    <CardText>A painting app written in C++ that uses UDP socket to communicate between the server and its clients and allows multiple users to draw on the same canvas over thee Internet. The app's GUI supports a variety of colors and brush types.</CardText>
                    <Button
                      color="info"
                      target="_blank"
                      href="https://github.com/loitruong2412/Academic-Projects/tree/master/Painting%20App"
                    >
                      Github
                    </Button>
                  </CardBody>
                </Card>
                <Card className="text-center" style={{ width: "30rem", margin: "2rem" }}>
                  <CardImg top src={require("../assets/img/projects/imageprocesser.png")} alt="..." />
                  <CardBody>
                    <CardTitle tag="h4">Image Processing App</CardTitle>
                    <CardSubtitle>Java</CardSubtitle>
                    <CardText>An application written in Java for processing images with filters such as sepia, greyscale, blur, sharpen, mosaic by using k-means clustering algorithm and matrix multiplication. The app has a GUI (using Java Swing) that allows users to undo or redo the steps.</CardText>
                    <Button
                      color="info"
                      href="https://github.com/loitruong2412/Academic-Projects/tree/master/Image%20Processing%20Application%20in%20Java"
                      target="_blank"
                    >
                      Github
                    </Button>
                  </CardBody>
                </Card>
                <Card className="text-center" style={{ width: "30rem", margin: "2rem" }}>
                  <CardImg top src={require("../assets/img/projects/othello.png")} alt="..." />
                  <CardBody>
                    <CardTitle tag="h4">Othello Classic Boardgame</CardTitle>
                    <CardSubtitle>Python 3</CardSubtitle>
                    <CardText>The classic board game Othello that was written in Python with the graphics made possible by Python Turtle. The game implementeed algorithms for an AI to always make optimal moves against the users.</CardText>
                    <Button
                      color="info"
                      href="https://github.com/loitruong2412/Academic-Projects/tree/master/Othello%20game%20in%20Python"
                      target="_blank"
                    >
                      Github
                    </Button>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  )
}