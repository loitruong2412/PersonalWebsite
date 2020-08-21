import React from "react";

import { Row, Col } from 'reactstrap';

const Experience = props => {
  return (
    <Row>
      <Col xs="4">
        <h4>{props.startYear} - {props.endYear}</h4>
      </Col>
      <Col xs="8">
        <h4>{props.jobTitle}</h4>
        <h5 style={{fontStyle: "italic"}}>{props.company}</h5>
        <h6>{props.location}</h6>
        <p style={{color: "black"}}>{props.jobDescription}</p>
      </Col>
    </Row>
  )
}

export default Experience;
