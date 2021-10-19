import React from "react";
import { connect } from "react-redux";
import { useQuery, gql } from "@apollo/client";
import { Redirect } from "react-router-dom";

import {
  Row,
  Col,
  Button,
  Container,
  Card,
  Spinner,
  Accordion,
  ListGroup,
} from "react-bootstrap";

import searchNameIn from "../../helpers/searchNameIn";
import searchNameEst from "../../helpers/searchNameEst";

import { login } from "../../actions/userActions";

const Proyecto = (props) => {
  const { loading, error, data } = useQuery(gql`
    query {
      proyectos {
        _id
        nombre
        descripcion
        fechaInicio
      }
      investigadores {
        nombre
        proyectos {
          Proyecto {
            _id
          }
        }
      }
      estudiantes {
        _id
        nombre
        proyectos {
          _id
        }
      }
    }
  `);

  const cerrarSesion = () =>{
    if (localStorage.token ) {
      localStorage.removeItem("token");
    }
    if(localStorage._id){
      localStorage.removeItem("_id");
    }
    props.history.push("/");
  }

 const irAdd = () => {
   props.history.push("/add");
 }

  if (loading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Button variant="info" onClick={cerrarSesion}>
        Cerrar Sesion
      </Button> {'  '}
      <Button variant="info" onClick={irAdd}>
        Agregar/Modificar
      </Button>
      <Row xs={2} md={2} className="mt-3">
        {Array.from({ length: data.proyectos.length }).map((_, idx) => (
          <Col>
            <Card className="mt-2">
              <Card.Header>{data.proyectos[idx]._id} </Card.Header>
              <Card.Body>
                <Card.Title>{data.proyectos[idx].nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {data.proyectos[idx].descripcion}
                </Card.Subtitle>
                <Card.Text>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Investigadores</Accordion.Header>
                      <Accordion.Body>
                        <Card style={{ width: "18rem" }}>
                          <ListGroup variant="flush">
                            {Array.from({
                              length: searchNameIn(data, idx + 1).length,
                            }).map((_, idx2) => (
                              <ListGroup.Item>
                                {searchNameIn(data, idx + 1)[idx2]}
                              </ListGroup.Item>
                            ))}
                          </ListGroup>
                        </Card>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Estudiantes</Accordion.Header>
                      <Accordion.Body>
                        <Card style={{ width: "18rem" }}>
                          <ListGroup variant="flush">
                            {Array.from({
                              length: searchNameEst(data, idx + 1).length,
                            }).map((_, idx2) => (
                              <ListGroup.Item>
                                {searchNameEst(data, idx + 1)[idx2]}
                              </ListGroup.Item>
                            ))}
                          </ListGroup>
                        </Card>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. {idx} 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const mapStatesToProps = (reducers) => {
  return reducers.userReducer;
};

const mapDispathToProps = {
  login,
};

export default connect(mapStatesToProps, mapDispathToProps)(Proyecto);
