import React from "react";

// core components
import Footer from "./Footer";

import {
  Container, Button,
} from "reactstrap";

import { Link } from "react-router-dom";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/background-index.JPG") + ")",
          }}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">LOI TRUONG</h1>
            <h3>I adventure and write code</h3>
            <h5>Vietnam born | Boston based</h5>
            <Link to="projects">
              <Button className="btn-round" color="transparent" size="lg" outline>
                EXPLORE MY WORKS
              </Button>
            </Link>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default Index;
