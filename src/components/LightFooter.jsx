/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, UncontrolledTooltip } from "reactstrap";

function LightFooter(props) {
  return (
    <footer className="light-footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/loitruong2412/Academic-Projects"
                target="_blank"
              >
                <i className="fab fa-github" id="github"></i>
              </a>
            </li>
            <UncontrolledTooltip placement="top" target="github" delay={0}>
                Github
            </UncontrolledTooltip>
            <li>
              <a
                href="https://www.linkedin.com/in/loitruong2412/"
                target="_blank"
              >
                <i className="fab fa-linkedin" id="linkedin"></i>
              </a>
            </li>
            <UncontrolledTooltip placement="top" target="linkedin" delay={0}>
                LinkedIn
            </UncontrolledTooltip>
            <li>
              <a
                href="mailto:loitruong2412@gmail.com"
                target="_blank"
              >
                <i className="fas fa-envelope" id="email"></i>
              </a>
              <UncontrolledTooltip placement="top" target="email" delay={0}>
                Hire Me
            </UncontrolledTooltip>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Loi Truong. Source code from{" "}
          <a
            href="https://www.creative-tim.com"
            target="_blank"
          >
            Creative Tim
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default LightFooter;
