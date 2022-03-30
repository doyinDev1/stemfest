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
        <Grid item xs={12} md={6}>
          {/* <InputField
            name={nameOnCard.name}
            label={nameOnCard.label}
            fullWidth
          /> */}
        </Grid>

        <Grid item xs={12} >
          {kidsList.map((x, i) => {
            return (
              <div
                style={{
                  marginBottom: "5px",
                  justifyContent: "center",
                }}
              >
                {/* <input
                  required
                  style={{ margin: 5 }}
                  placeholder="Enter child name"
                  type="text"
                  name="childName"
                  value={x.name}
                  onChange={e => handleInputChange(e, i)}
                  // defaultValue={value.name}
                /> */}
                <div className="textField"
                style={{paddingBottom: '20px'}}
                >

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
                  style={{ backgroundColor: 'white', borderRadius: '5px', padding: '4px'}}
                  />
                  </div>

                  <div className="textField"
                style={{paddingBottom: '20px'}}
                >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="ageRange"
                    id="ageRange"
                    // value={age}
                    label="Age"
                    // name="Age"
                    required
                    onChange={(e) => handleInputChange(e, i)}
                    style={{ backgroundColor: 'white', borderRadius: '5px'}}

                  >
                    <MenuItem value="2-5">2-5</MenuItem>
                    <MenuItem value="8-12">8-12</MenuItem>
                    <MenuItem value="13-15">13-15</MenuItem>
                  </Select>
                </FormControl>
</div>

<div className="textField"
                style={{paddingBottom: '20px'}}
                >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="gender"
                    id="gender"
                    // value={age}
                    label="Gender"
                    // name="Age"
                    required
                    onChange={(e) => handleInputChange(e, i)}
                    style={{ backgroundColor: 'white', borderRadius: '5px'}}

                  >
                    <MenuItem value="Gender">Gender</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </FormControl>
</div>
                {/* <select
                  required
                  onChange={e => handleInputChange(e, i)}
                  style={{ margin: 5 }}
                  name="gender"
                  id="gender"
                >
                  <option value="Gender">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select> */}
                {/* <select
                  required
                  onChange={e => handleInputChange(e, i)}
                  style={{ margin: 5 }}
                  name="ageRange"
                  id="ageRange"
                >
                  <option value="Age Range">Age Range</option>
                  <option value="2-5">2-5</option>
                  <option value="8-12">8-12</option>
                  <option value="13-15">13-15</option>
                </select> */}
                <div
                  style={{
                    marginLeft: "10px",
                    width: "200px",
                    display: "inline-block",
                  }}
                >
                  {kidsList.length !== 1 && (
                    // <button
                    //   style={{
                    //     background: '#013261',
                    //     padding: '5px;',
                    //     color: '#fff',
                    //     marginRight: '10px'
                    //   }}
                    //   onClick={() => handleRemoveClick(i)}
                    // >
                    //   Remove
                    // </button>
<>

<div className="textField"
                style={{paddingBottom: '20px'}}
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
                    // <button
                    //   style={{
                    //     background: '#013261',
                    //     borderRadius: '2px',
                    //     padding: '4px',
                    //     color: '#fff'
                    //   }}
                    //   onClick={handleAddClick}
                    // >
                    //   Add
                    // </button>

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
