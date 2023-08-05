import React from 'react'
import { Select,MenuItem ,FormControl,InputLabel} from '@mui/material';

const Myoption = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "2rem",
        }}
      >
        <FormControl style={{ width: "10%", backgroundColor: "silver" }}>
          <InputLabel id="demo-simple-select-label">HeadPhone Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="HeadPhone type"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "10%", backgroundColor: "silver" }}>
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="HeadPhone type"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "10%", backgroundColor: "silver" }}>
          <InputLabel id="demo-simple-select-label">Review</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="HeadPhone type"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "10%", backgroundColor: "silver" }}>
          <InputLabel id="demo-simple-select-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="HeadPhone type"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "10%", backgroundColor: "silver" }}>
          <InputLabel id="demo-simple-select-label">Material</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="HeadPhone type"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "10%", backgroundColor: "silver" }}>
          <InputLabel id="demo-simple-select-label">Other</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="HeadPhone type"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "10%", backgroundColor: "silver" }}>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="HeadPhone type"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "flex-end",
          padding: "0 3rem 0 0",
        }}
      >
        <FormControl style={{  width:"30%",backgroundColor: "silver" ,}}>
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="HeadPhone type"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Myoption;
