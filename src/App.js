import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { Form } from "./Form";

export default function App() {
  const [hasName, setHasName] = useState("Yes");
  const [name, setName] = useState("Felipe");

  const handleName = (e) => setName(e.target.value);
  const handleHasName = (e) => {
    const hasName = e.target.value;
    if (hasName === "No") {
      setName("Felipe");
    }
    setHasName(hasName);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <p>Main page</p>
        <Form
          hasName={hasName}
          handleHasName={handleHasName}
          name={name}
          handleName={handleName}
        />
      </Box>
    </Container>
  );
}
