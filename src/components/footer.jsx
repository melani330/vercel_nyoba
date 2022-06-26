import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import * as React from "react";
import logo from "../images/logo-tp.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e0f2f1",
    },
    secondary: {
      main: "#f44336",
      biru: "#4fc3f7",
    },
  },
});

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <footer>
        <Box
          px={{ xs: 4, sm: 6 }}
          py={{ xs: 6, sm: 10 }}
          bgcolor="secondary.biru"
          //   color="white"
        >
          <Container maxWidth="lg">
            <Grid container spacing={6} textAlign="center">
              <img src={logo} alt="logo" w="" />
              <Grid item xs={12} sm={4} md={3}>
                <Box borderBottom={3}>Help</Box>
                <Box>
                  <Link href="/" color="primary">
                    Contact
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="primary">
                    Support
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="primary">
                    Private
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Box borderBottom={3}>Account</Box>
                <Box>
                  <Link href="/" color="primary">
                    Login
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="primary">
                    Register
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Box borderBottom={3}>Programs</Box>
                <Box>
                  <Link href="/" color="primary">
                    Training
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="primary">
                    Coaching
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Box
              textAlign="center"
              pt={{ xs: 5, sm: 10 }}
              pb={{ xs: 5, sm: 0 }}
            >
              Usahakuy.ID &reg; {new Date().getFullYear()}
            </Box>
          </Container>
        </Box>
      </footer>
    </ThemeProvider>
  );
}

//
