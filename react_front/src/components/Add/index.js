import React, { useState } from "react";
import { connect } from "react-redux";
import { useMutation, gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { addProyectoDB } from "../../actions/userActions";

import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Alert, FloatingLabel
} from "react-bootstrap";

const Add = (props) => {

  const { data } = useQuery(gql`
    query {
      proyectos {
        _id
      }
    }
  `);

  const ADD = gql`
    mutation AddProyecto(
      $_id: String!
      $nombre: String!
      $descripcion: String!
      $estado: String!
      $obGeneral: String!
      $obEspecificos: String!
      $presupuesto: String!
      $fechaInicio: String!
      $fechaFinal: String!
      $avances: [String]!
    ) {
      addProyecto(
        _id: $_id
        nombre: $nombre
        descripcion: $descripcion
        estado: $estado
        obGeneral: $obGeneral
        obEspecificos: $obEspecificos
        presupuesto: $presupuesto
        fechaInicio: $fechaInicio
        fechaFinal: $fechaFinal
        avances: $avances
      ) {
        _id
        nombre
        descripcion
      }
    }
  `;

  const [form, setValues] = useState({
    _id: "",
    nombre: "",
    descripcion: "",
    estado: "",
    obGeneral: "",
    obEspecificos: "",
    presupuesto: "",
    fechaInicio: "",
    fechaFinal: "",
    avances: "",
  });

  const [addProyecto, {loading, error }] = useMutation(ADD, {
    variables: {
      _id: localStorage._id,
      nombre: form.nombre,
      descripcion: form.descripcion,
      estado: form.estado,
      obGeneral: form.obGeneral,
      obEspecificos: form.obEspecificos,
      presupuesto: form.presupuesto,
      fechaInicio: form.fechaInicio,
      fechaFinal: form.fechaFinal,
      avances: form.avances,
    },
    onCompleted: () => {
      props.history.push("/");
      console.log("Se ha agregado el proyecto con Exito");
    },
    onError: (error) => {
      console.log("Error en el post", error);
      props.addProyectoDB(
        form,
        props,
        data,
        error,
        loading,
        addProyecto,
        setValues
      );
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
    props.addProyectoDB(form, props, data, error, loading, addProyecto, setValues);
    console.log("Se ejecuto el boton para AddProyecto");
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
              <Card.Title className="text-center">Agregar Proyecto</Card.Title>
              {showError()}
              {showLoading()}
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre del Proyecto"
                    name="nombre"
                    onChange={handleInput}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mt-3">
                  <FloatingLabel label="Descripcion">
                    <Form.Control
                      as="textarea"
                      placeholder="Ingrese la descrpcion del proyecto"
                      style={{ height: "100px" }}
                      name="descripcion"
                      onChange={handleInput}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Estado del Proyecto</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el estado del proyecto"
                    name="estado"
                    onChange={handleInput}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mt-3">
                  <FloatingLabel label="Objetivos Generales">
                    <Form.Control
                      as="textarea"
                      placeholder="Ingrese el objetivos generales del proyecto"
                      style={{ height: "100px" }}
                      name="obGeneral"
                      onChange={handleInput}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mt-3">
                  <FloatingLabel label="Objetivos Especificos">
                    <Form.Control
                      as="textarea"
                      placeholder="Ingreselos objetivos especificos del proyecto"
                      style={{ height: "100px" }}
                      name="obEspecificos"
                      onChange={handleInput}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Presupuesto</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese el presupuesto"
                    name="presupuesto"
                    onChange={handleInput}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Fecha Inicio</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese la fecha de inicio dle proyecto"
                    name="fechaInicio"
                    onChange={handleInput}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label>Fecha Finala</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese la fecha de final dle proyecto"
                    name="fechaFinal"
                    onChange={handleInput}
                  ></Form.Control>
                </Form.Group>

                <Form.Group className="mt-3">
                  <FloatingLabel label="Avances">
                    <Form.Control
                      as="textarea"
                      placeholder="Ingrese los avances"
                      style={{ height: "100px" }}
                      name="avances"
                      onChange={handleInput}
                    />
                  </FloatingLabel>
                </Form.Group>

                <Col>
                  <Button variant="primary" type="submit" className="mt-3">
                    <span>Agregar Proyecto</span>
                  </Button>{" "}
                </Col>
              </Form>
            </Card.Body>
            <Card.Footer>
              <Link to="/update"> Modificar Proyecto</Link>
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
  addProyectoDB,
};

export default connect(mapStatesToProps, mapDispathToProps)(Add);
