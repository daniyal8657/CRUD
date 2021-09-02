import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./RecordTable.css";

export const RecordTable = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, email, states, city, pincode } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("states", states);
    localStorage.setItem("city", city);
    localStorage.setItem("pincode", pincode);
  };

  const getData = () => {
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };

  useEffect(()=>{
    getData();
  },[])

  return (
    <div>
      <Row className="headerC">
        <Col md={3}>
          <Link to="/Add">
            <Button className="addbtn">+ Add Record</Button>
          </Link>
        </Col>
        <Col md={6}></Col>
        <Col md={3}>
          <Form.Control type="text" />
        </Col>
      </Row>
      <Row className="recordheader">
        <Col>#</Col>
        <Col>First Name</Col>
        <Col>Last Name</Col>
        <Col md={2}>Email</Col>
        <Col md={2}>State</Col>
        <Col>City</Col>
        <Col>Pincode</Col>
        <Col md={3}>Action</Col>
      </Row>
      <div>
        {APIData &&
          APIData.map((data) => 
          (
            <Row className="recordlist">
              <Col>{data.id}</Col>
              <Col>{data.firstName}</Col>
              <Col>{data.lastName}</Col>
              <Col md={2}>{data.email}</Col>
              <Col md={2}>{data.states}</Col>
              <Col>{data.city}</Col>
              <Col>{data.pincode}</Col>
              <Col md={3}>
                <Row>
                  <Col>
                    <Link to="/Edit">
                      <Button onClick={() => setData(data)}>Edit</Button>
                    </Link>
                  </Col>
                  <Col>
                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                  </Col>
                </Row>
              </Col>
            <hr />
            </Row>
          ))}
      </div>
    </div>
  );
};
