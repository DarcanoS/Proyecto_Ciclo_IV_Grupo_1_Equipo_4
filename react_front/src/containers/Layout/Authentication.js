import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

const Authentication = ({ component: Component, loading, login, ...rest }) => {
  if(localStorage._id || localStorage.token){
    return <Redirect to="/" />
  }else{
    return (
      <Route
        {...rest}
        render={(props) => {
          return (
            <Container>
              <Row>
                <Component {...props} />
              </Row>
            </Container>
          );
        }}
      />
    );
  }
};

export default Authentication;
