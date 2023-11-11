import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const EmployeeItem = ({ item, handleUpdate, setShow }) => {
  const navigate = useNavigate();

  const handeldetail = (item) => {
    navigate("/empdetail", { state: item });
  };

  const handleDelete = async (_id) => {
    const url = "http://localhost:2888/empdel";
    const payload = { _id };
    if (window.confirm("Are you Sure Delete")) {
      const result = await axios.post(url, payload);
      console.log(result.data, "emp deltede");
      setShow(result.data);
      window.location.reload(false);
    }
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={1}>
        {item.empid}
      </Grid>
      <Grid
        item
        xs={2}
        sx={{ cursor: "pointer" }}
        onClick={() => handeldetail(item)}
      >
        {item.fname.toUpperCase()}
        {item.lname.toUpperCase()}
      </Grid>
      <Grid item xs={2}>
        {item.email}
      </Grid>
      <Grid item xs={2}>
        {item.mobile}
      </Grid>
      <Grid item xs={2}>
        {item.city}
      </Grid>
      <Grid item xs={1}>
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: item.IsActive === true ? "green" : "red",
          }}
        ></div>
      </Grid>
      <Grid item xs={1}>
        <Button
          onClick={() => handleUpdate(item)}
          variant="contained"
          fullWidth
        >
          {" "}
          Update
        </Button>
      </Grid>
      <Grid item xs={1}>
        <Button
          onClick={() => handleDelete(item._id)}
          variant="contained"
          color="warning"
          fullWidth
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};
