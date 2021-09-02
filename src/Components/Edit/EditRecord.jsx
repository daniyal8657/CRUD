import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import "./EditRecord.css";
import axios from "axios";
import { useHistory } from "react-router";

export const EditRecord = () => {
  let history = useHistory();
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setEmail(localStorage.getItem("email"));
    setStates(localStorage.getItem("states"));
    setCity(localStorage.getItem("city"));
    setPincode(localStorage.getItem("pincode"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        email,
        states,
        city,
        pincode,
      })
      .then(() => {
        history.push("/RecordSheet");
      });
  };

  return (
    <div>
      <Card className="inputcard">
        <Row className="inputrow">
          <Col></Col>
          <Col md={2}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={true}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col md={2}>
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              value={states}
              onChange={(e) => setStates(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="number"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Button type="submit" onClick={updateAPIData}>
              Update
            </Button>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Card>
    </div>
  );
};
