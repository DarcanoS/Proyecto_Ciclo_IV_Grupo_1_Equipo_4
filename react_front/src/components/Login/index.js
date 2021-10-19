import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import { login } from "../../actions/userActions";

import { Form, Button, Container, Row, Col, Card, Alert } from "react-bootstrap";

const Login = (props) => {

  const { loading, error, data } = useQuery(gql`
    query{
      credenciales{
        _id
        usuario
        clave
      }
    }
  `);

  const [ form, setValues ] = useState({
    usuario: '',
    clave: ''
  })

  //Ingresa los datos del formulario
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  //Ejecucion dle boton
  const handleSubmit = event => {
    event.preventDefault();
    props.login(form, props, data, error, loading)
  }

  //Retorna una alerta de error
  const showError = () => {
    if(props.error_login){
      return( <Alert variant="danger"> {props.error_login} </Alert> )
    }
  }

  //Retorna una alerta de cargando
  const showLoading = () => {
    if(props.loading){
      return( <Alert variant="warning"> Cargando ....... </Alert> )
    }
  }

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card style={{ width: "30rem" }} border="primary" className="mt-5">
            <Card.Body>
              <Card.Title className="text-center">Iniciar Sesion</Card.Title>
              { showError() }
              { showLoading() }
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese su Usuario"
                    name="usuario"
                    onChange={handleInput}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    name="clave"
                    onChange={handleInput}
                  ></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                  <span>Iniciar Sesion</span>
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer>

              <Link to="/signup"> Registrar </Link>

            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStatesToProps = (reducers) => {
  return reducers.userReducer;
};

const mapDispathToProps = {
  login
};

export default connect(mapStatesToProps, mapDispathToProps)(Login);
