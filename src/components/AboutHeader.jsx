import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

export default function AboutHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/background-about.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("../assets/img/profile-pic.jpg")}></img>
          </div>
          <h3 className="title">Loi Truong</h3>
          <p className="category">Software Engineer</p>
        </Container>
      </div>
    </>
  );
}
