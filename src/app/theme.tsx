"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "IRANSansXV, Arial, sans-serif",
          fontSize: "16px", 
        
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "IRANSansXV, Arial, sans-serif", 
        },
      },
    },
  },
});

export default theme;
