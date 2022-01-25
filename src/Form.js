import React from "react";
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";

export const Form = ({ hasName, handleHasName, name, handleName }) => {
  const upperName = name.toUpperCase();

  return (
    <Stack>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Has name</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={hasName}
          onChange={handleHasName}
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <TextField
        value={name}
        onChange={handleName}
        disabled={hasName === "No"}
      />
      {`Uper case name: ${upperName}`}
    </Stack>
  );
};
