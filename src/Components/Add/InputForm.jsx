import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Card, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router";
import "./InputForm.css";
import axios from "axios";
import validator from "validator";

export const InputForm = () => {
  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const postData = () => {
    axios
      .post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
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

  //   const postData = () => {
  //     axios.defaults.headers.get["Access-Control-Allow-Headers"] =
  //       "https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com";
  //     axios.get(
  //       `https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/add?param1=${email}&param2=${firstName}&param3=${lastName}&param4=${pincode}&param5=${city}&param6=${states}`
  //     );
  //   };

  //   const getData = async () => {
  //     axios.defaults.headers.get["Access-Control-Allow-Headers"] =
  //       "https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com";
  //     const result = await axios.get(
  //       `https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch`
  //     );
  //     console.log("===>", result);
  //     // setData([...result.data]);
  //   };

  //   const getDataFetch = async () => {
  //     const result = await fetch(
  //       `https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch`
  //     );
  //     console.log("===>", result);
  //     // setData([...result.data]);
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);
  return (
    <div>
      <Card className="inputcard">
        <Row className="inputrow">
          <Col></Col>
          <Col md={2}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              required={true}
            />
          </Col>
          <Col md={2}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              required={true}
            />
          </Col>
          <Col md={2}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              onChange={(e) => validateEmail(e)}
              required={true}
            />
            <p>{emailError}</p>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col md={2}>
            {/* <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setStates(e.target.value)}
            /> */}
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                State
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Maharashtra</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Goa</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Gujrat</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Delhi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={2}>
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCity(e.target.value)}
              required={true}
            />
          </Col>
          <Col md={2}>
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setPincode(e.target.value)}
              required={true}
            />
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Button type="submit" onClick={postData}>
              Submit
            </Button>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Card>
    </div>
  );
};
