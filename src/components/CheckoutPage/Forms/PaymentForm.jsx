import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function PaymentForm({ setGetKid }) {
  const [kidsList, setKidsList] = useState([
    { childName: "", gender: "", ageRange: "" },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...kidsList];
    list[index][name] = value;
    setKidsList(list);
    // handleFormData(value);
    // console.log(name, value, list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...kidsList];
    list.splice(index, 1);
    setKidsList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setKidsList([...kidsList, { childName: "", gender: "", ageRange: "" }]);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Register child details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}></Grid>

        <Grid item xs={12}>
          {kidsList.map((x, i) => {
            return (
              <div
                style={{
                  marginBottom: "5px",
                  justifyContent: "center",
                }}
              >
<div className="wholeDiv" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>





                <div className="textField" style={{ paddingBottom: "20px" }}>
                  <TextField
                    label="ChildName"
                    fullWidth
                    id="fullWidth"
                    placeholder="Enter child name"
                    onChange={(e) => handleInputChange(e, i)}
                    value={x.name}
                    name="childName"
                    type="text"
                    required
                    variant="standard"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "4px",
                    }}
                  />
                </div>
                <div className="textField" style={{ paddingBottom: "20px" , paddingLeft: '20px', width: '200px'}}>
                  <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name="ageRange"
                      id="ageRange"
                      // value='age'
                      label="Age"
                      // name="Age"
                      required
                      onChange={(e) => handleInputChange(e, i)}
                      style={{ backgroundColor: "white", borderRadius: "5px" }}
                    >
                      <MenuItem value="5-7">5-7</MenuItem>
                      <MenuItem value="8-12">8-12</MenuItem>
                      <MenuItem value="13-15">13-15</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="textField" style={{ paddingBottom: "20px" , paddingLeft: '20px', width: '200px'}}>
                  <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name="gender"
                      id="gender"
                      // value='Gender'
                      label="Gender"
                      // name="Age"
                      required
                      onChange={(e) => handleInputChange(e, i)}
                      style={{ backgroundColor: "white", borderRadius: "5px" }}
                    >
                      {/* <MenuItem value="Gender">Gender</MenuItem> */}
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </div>

               
                </div>
                <div
                  style={{
                    marginLeft: "10px",
                    width: "200px",
                    display: "inline-block",
                  }}
                >
                  {kidsList.length !== 1 && (
                    <>
                      <div
                        className="textField"
                        style={{ paddingBottom: "20px" }}
                      >
                        <Button
                          onClick={() => handleRemoveClick(i)}
                          variant="contained"
                        >
                          Remove
                        </Button>
                      </div>
                    </>
                  )}
                  {kidsList.length - 1 === i && kidsList.length !== 6 && (
                    <Button onClick={handleAddClick} variant="contained">
                      Add child
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </Grid>

        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
      {setGetKid(kidsList)}
    </React.Fragment>
  );
}
