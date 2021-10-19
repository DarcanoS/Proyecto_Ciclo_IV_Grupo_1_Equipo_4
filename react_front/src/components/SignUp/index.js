import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useMutation, gql, useQuery } from "@apollo/client";

import { signUp } from "../../actions/userActions";

import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Alert,
} from "react-bootstrap";

const SignUp = (props) => {
  const { data } = useQuery(gql`
    query {
      credenciales {
        _id
      }
    }
  `);

  const ADD = gql`
    mutation AddCredencial($_id: String!, $usuario: String!, $clave: String!) {
      addCredencial(_id: $_id, usuario: $usuario, clave: $clave) {
        _id
        usuario
        clave
      }
    }
  `;

  const [form, setValues] = useState({
    _id: "",
    usuario: "",
    clave: "",
  });

  const [addCredencial, { loading, error }] = useMutation(ADD, {
    variables: {
      _id: localStorage._id,
      usuario: form.usuario,
      clave: form.clave,
    },
    onCompleted: () => {
      props.history.push("/");
      console.log("Se ha realizado el SignUp con Exito");
    },
    onError: (error) => {
      console.log("Error en el post", error);
      props.signUp(form, props, data, error, loading, addCredencial, setValues);
    },
  });

  //Ingresa los datos del formulario
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  //Ejecucion dle boton
  const handleSubmit = (event) => {
    event.preventDefault();
    props.signUp(form, props, data, error, loading, addCredencial, setValues);
    console.log("Se ejecuto el boton para SignUp");
  };

  //Retorna una alerta de error
  const showError = () => {
    if (props.error_signup) {
      return <Alert variant="danger"> {props.error_signup} </Alert>;
    }
  };

  //Retorna una alerta de cargando
  const showLoading = () => {
    if (props.loading) {
      return <Alert variant="warning"> Cargando ....... </Alert>;
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card style={{ width: "30rem" }} border="primary" className="mt-5">
            <Card.Body>
              <Card.Title className="text-center">Registrar Usuario</Card.Title>
              {showError()}
              {showLoading()}
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
                  <span>Registrar</span>
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer>
              <Link to="/login"> Iniciar Sesion </Link>
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
  signUp,
};

export default connect(mapStatesToProps, mapDispathToProps)(SignUp);
