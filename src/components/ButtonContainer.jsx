import React from "react";
import Button from "@mui/material/Button";


function ButtonContainer({ children, onClick }) {
  return (
    <Button
      style={{
        backgroundColor: "#02c29b",
        fontWeight: "600",
        padding: "10px 20px",
      }}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default ButtonContainer;
