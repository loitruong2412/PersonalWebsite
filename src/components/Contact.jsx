import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components

import LightFooter from "./LightFooter";

export default function Contact() {
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [subjectFocus, setSubjectFocus] = React.useState(false);
  const [messageFocus, setMessageFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
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
                <Form action="https://formspree.io/mrgykbwd" className="form" method="POST">
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (emailFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="email"
                        placeholder="Email..."
                        type="email"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (subjectFocus ? " input-group-focus" : "")
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
                        onFocus={() => setSubjectFocus(true)}
                        onBlur={() => setSubjectFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (messageFocus ? " input-group-focus" : "")
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
                        onFocus={() => setMessageFocus(true)}
                        onBlur={() => setMessageFocus(false)}
                      ></Input>
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
