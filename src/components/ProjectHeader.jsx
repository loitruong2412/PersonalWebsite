import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function ProjectHeader() {
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
      <div className="page-header clear-filter page-header" filter-color="blue" >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/background-projects.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container style={{marginTop: "5rem"}}>
          <h3 className="title">My Projects</h3>
        </Container>
      </div>
    </>
  );
}
