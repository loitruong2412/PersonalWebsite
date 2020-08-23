import React, { Component } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components

import LightFooter from "./LightFooter";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailFocus: false,
      setEmailFocus: false,
      subjectFocus: false,
      setSubjectFocus: false,
      messageFocus: false,
      setMessageFocus: false,
      email: '',
      subject: '',
      message: '',
      validate: {
        emailState: '',
        subjectState: '',
        messageStatee: '',
      },
    }
    this.changeInputHandler = this.changeInputHandler.bind(this);
  }
  componentDidMount() {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }

  changeInputHandler(e) {
    this.setState({[e.target.name] : e.target.value});
  }

  validateEmail(e) {
    const { validate } = this.state
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.value.length >=1 && emailRex.test(e.target.value)) {
      validate.emailState = 'has-success'
    } else {
      validate.emailState = 'has-danger'
    }
    this.setState({ validate })
  }

  validateSubject(e) {
    const { validate } = this.state
    if (e.target.value.length >=1) {
      validate.subjectState = 'has-success'
    } else {
      validate.subjectState = 'has-danger'
    }
    this.setState({ validate })
  }

  validateMessage(e) {
    const { validate } = this.state
    if (e.target.value.length >=1) {
      validate.messageState = 'has-success'
    } else {
      validate.messageState = 'has-danger'
    }
    this.setState({ validate })
  }

  render() {
    return (
      <>
        <div className="page-header clear-filter" filter-color="blue">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("../assets/img/background-contact.jpg") + ")",
            }}
          ></div>
          <div className="content">
            <Container>
              <h3>LET'S CONNECT</h3>
              <Container className="social-media">
                <div>
                  <a
                    href="https://www.facebook.com/truongbaloi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="..."
                      src={require("../assets/img/icons/facebook.png")}
                    ></img>
                  </a>
                  <a
                    href="https://www.instagram.com/loitruong2412/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="..."
                      src={require("../assets/img/icons/instagram.png")}
                    ></img>
                  </a>
                  <a
                    href="https://github.com/loitruong2412/Academic-Projects"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="..."
                      src={require("../assets/img/icons/github.png")}
                    ></img>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/loitruong2412/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="..."
                      src={require("../assets/img/icons/linkedin.png")}
                    ></img>
                  </a>             
                </div>
              </Container>

              <Col className="ml-auto mr-auto" md="4">

                <Card className="card-login card-plain">
                  <h3>OR SEND ME A MESSAGE</h3>
                  <Form
                    action="https://formspree.io/mrgykbwd"
                    className="form"
                    method="POST"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <CardBody>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (this.state.emailFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          // className={(this.state.validate.emailState === 'has-success' ? 'form-control-success' : 'form-control-danger')}
                          name="email"
                          placeholder="Email..."
                          type="email"
                          onFocus={() => this.setState({ setEmailFocus: true })}
                          onBlur={() => this.setState({ setEmailFocus: false })}
                          value={ this.state.email }
                          valid={ this.state.validate.emailState === 'has-success' }
                          invalid={ this.state.validate.emailState ==='has-danger' }
                          onChange={(e) => {
                            this.changeInputHandler(e)
                            this.validateEmail(e)
                          }}
                        ></Input>
                        <FormFeedback>Email cannot be empty or invalid.</FormFeedback>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (this.state.subjectFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons shopping_tag-content"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="subject"
                          placeholder="Subject..."
                          type="text"
                          onFocus={() => this.setState({ setSubjectFocus: true })}
                          onBlur={() => this.setState({ setSubjectFocus: false })}
                          value={ this.state.subject }
                          valid={ this.state.validate.subjectState === 'has-success' }
                          invalid={ this.state.validate.subjectState ==='has-danger' }
                          onChange={(e) => {
                            this.changeInputHandler(e)
                            this.validateSubject(e)
                          }}
                        ></Input>
                        <FormFeedback>Subject cannot be empty.</FormFeedback>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (this.state.messageFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="message"
                          placeholder="Message..."
                          type="textarea"
                          onFocus={() => this.setState({ setMessageFocus: true })}
                          onBlur={() => this.setState({ setMessageFocus: false })}
                          value={ this.state.message }
                          valid={ this.state.validate.messageState === 'has-success' }
                          invalid={ this.state.validate.messageState ==='has-danger' }
                          onChange={(e) => {
                            this.changeInputHandler(e)
                            this.validateMessage(e)
                          }}
                        ></Input>
                        <FormFeedback>Message cannot be empty.</FormFeedback>
                      </InputGroup>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        type="submit"
                        size="lg"
                      >
                        SEND
                      </Button>
                    </CardFooter>
                  </Form>
                </Card>
              </Col>
            </Container>
          </div>
          <LightFooter />
        </div>
      </>
    );
  }
}
