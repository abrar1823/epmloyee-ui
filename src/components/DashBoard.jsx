import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

export const DashBoard = () => {
  const mydata = useLocation();
  const data = mydata.state;
  console.log("my datat", data);
  const active = data.filter((item) => item.IsActive === true);
  const deactive = data.filter((item) => item.IsActive === false);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h1>Total Number of Emplyee={data.length}</h1>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h1>Total Number of Active-Emplyee={active.length}</h1>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <h1>Total Number of DeActive-Emplyee={deactive.length}</h1>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
