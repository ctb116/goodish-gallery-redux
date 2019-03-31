import React from "react";
import { Container, Row, Col } from "reactstrap";
// import NextPage from "./NextPage";
// import PrevPage from "./PrevPage";

const ComicPage = props => {
  return (
    <Container>
      <Row>
        <Col sm="1">
          <a href={`/cornstaff/${props.paramsPrev}`}>Prev Page</a>
        </Col>
        <Col sm="10">
          <img
            className="comicPage"
            src={props.page.url}
            alt={props.page.name}
          />
        </Col>
        <Col sm="1">
          <a href={`/cornstaff/${props.paramsNext}`}>Next Page</a>
        </Col>
      </Row>
    </Container>
  );
};

export default ComicPage;
