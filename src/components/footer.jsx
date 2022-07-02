import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

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
    <div id="footer">
      <ThemeProvider theme={theme}>
        <footer>
          <Box
            px={{ xs: 4, sm: 6 }}
            py={{ xs: 6, sm: 10 }}
            bgcolor="secondary.biru"
            //   color="white"
          >
            <Container maxWidth="lg">
              <Grid container spacing={7} textAlign="center">
                <img src="images/logo-tp.png" alt="logo" />
                <Grid item xs={12} sm={4} md={3}>
                  <Box borderBottom={2} mb={2}>
                    Help
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
                  <Box borderBottom={2} mb={2}>
                    Contact
                  </Box>
                  <Box>
                    <Link href="/" color="primary">
                      +628345356212
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/" color="primary">
                      usahakuy.id@gmail.com
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/" color="primary">
                      Indonesia
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                  <Box borderBottom={2} mb={2}>
                    Follow Us
                  </Box>
                  <Box>
                    <Link href="/" color="primary">
                      <FacebookIcon />
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/" color="primary">
                      <TwitterIcon />
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/" color="primary">
                      <InstagramIcon />
                    </Link>
                  </Box>
                </Grid>
              </Grid>
              <Box
                textAlign="center"
                pt={{ xs: 1, sm: 10 }}
                pb={{ xs: 1, sm: 0 }}
              >
                Usahakuy.ID &reg; {new Date().getFullYear()}
              </Box>
            </Container>
          </Box>
        </footer>
      </ThemeProvider>
    </div>
  );
}

//
