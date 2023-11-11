import React, { useEffect, useState } from "react";
import {
  Grid,
  Switch,
  Button,
  TextField,
  Card,
  CardContent,
  Alert,
} from "@mui/material";
import axios from "axios";
import { EmployeeList } from "./EmployeeList";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

export const Addemp = () => {
  const navigate = useNavigate();
  const [empid, setEmpId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [IsActive, setIsActive] = useState(false);
  const [update, setUpdate] = useState(false);
  const [_id, set_id] = useState("");
  const [vali, setVali] = useState(false);
  const [show, setShow] = useState("");

  const option = [
    {
      label: "Mumbai",
      value: "Mumbai",
    },
    {
      label: "Pune",
      value: "Pune",
    },
    {
      label: "Nanded",
      value: "Nanded",
    },
    {
      label: "HydraBad",
      value: "HydraBad",
    },
    {
      label: "Banglore",
      value: "Banglore",
    },
    {
      label: "Chennai",
      value: "Chennai",
    },
  ];

  const handleEmployee = async () => {
    if (update == true) {
      const url = "http://localhost:2888/empupd";
      const payload = {
        _id,
        empid,
        fname,
        lname,
        email,
        mobile,
        city,
        IsActive,
      };
      const result = await axios.post(url, payload);
      setShow(result.data);
      console.log(result.data);
      result.status === 200 && setUpdate(false);
      setEmpId("");
      setFname("");
      setLname("");
      setEmail("");
      setMobile("");
      setCity("");
      setIsActive(false);
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
    } else {
      const url = "http://localhost:2888/addemp";
      const payload = {
        empid,
        fname,
        lname,
        email,
        mobile,
        city,
        IsActive,
      };
      const result = await axios.post(url, payload);
      setShow(result.data);
      console.log(result.data);
      result.status === 200 && setEmpId("");
      setFname("");
      setLname("");
      setEmail("");
      setMobile("");
      setCity("");
      setIsActive(false);
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
    }
  };
  const handleUpdate = (item) => {
    setEmpId(item.empid);
    setFname(item.fname);
    setLname(item.lname);
    setEmail(item.email);
    setMobile(item.mobile);
    setCity(item.city);
    setIsActive(item.IsActive);
    set_id(item._id);
    setUpdate(true);
  };

  const handleCancel = () => {
    setEmpId("");
    setFname("");
    setLname("");
    setEmail("");
    setMobile("");
    setCity("");
    setIsActive(false);
  };
  useEffect(() => {
    setVali(
      fname !== "" &&
        lname !== "" &&
        city !== "" &&
        email !== "" &&
        empid.length === 5 &&
        mobile.length === 10
    );
  }, [empid, fname, lname, email, city, mobile]);

  useEffect(() => {
    const emails = localStorage.getItem("email");
    // const passwords = localStorage.getItem("password");

    emails || (!emails && navigate("/login"));
  }, []);
  return (
    <div>
      {/* <Card>
        <CardContent> */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "4px",
          padding: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              value={empid}
              onChange={(e) => setEmpId(e.target.value)}
              type="number"
              required
              variant="outlined"
              label="Employee Id"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
              variant="outlined"
              label="First Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
              variant="outlined"
              label="Last Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              label="Email Id"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="number"
              required
              variant="outlined"
              label="Mobile No-"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            {/* <TextField
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                variant="outlined"
                label="City"
                fullWidth
              /> */}
            <Select
              menuPlacement="auto"
              minMenuHeight={200}
              onChange={(e) => setCity(e.value)}
              options={option}
            />
          </Grid>
          <Grid item xs={1}>
            <Switch
              IsActive={IsActive}
              onClick={() => setIsActive(!IsActive)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              disabled={update ? "" : !vali}
              onClick={handleEmployee}
              variant="contained"
              fullWidth
            >
              {update ? "Update" : "Submit"}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={handleCancel} variant="outlined" fullWidth>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
      {/* </CardContent>
      </Card> */}
      <br />
      {show && <Alert severity="success">{show}</Alert>}
      <br />
      <EmployeeList setShow={setShow} handleUpdate={handleUpdate} />
    </div>
  );
};
