import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function ResumeHeader() {
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
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/background-resume.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container style={{marginTop: "5rem"}}>
          <h3 className="title">My Resume</h3>
          <h5 className="category">Seeking Software Engineer/Developer full-time opportunities for Summer 2021 start date</h5>
        </Container>
      </div>
    </>
  );
}
