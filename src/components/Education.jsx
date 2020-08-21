import React from "react";

import { Row, Col } from 'reactstrap';

const Education = props => {
  return (
    <Row>
      <Col xs="4">
        <h4>{props.startYear} - {props.endYear}</h4>
      </Col>
      <Col xs="8">
        <h4>{props.school}</h4>
        <h5 style={{fontStyle: "italic"}}>{props.degree}</h5>
        <h6>{props.gpa}</h6>
        <p style={{color: "black"}}>{props.concentration}</p>
        <p style={{color: "black"}}>{props.courses}</p>
      </Col>
    </Row>
  )
}

export default Education;