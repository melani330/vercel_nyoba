
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import gambar from "../images/meeting-bro.svg";
import "../css/tentang.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#4fc3f7',
            },
        },
    }
);

export default function Tentang() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 20,
            pb: 10,
            pl: 10,
            pr: 10,
            // display: 'flex', flexDirection: 'row',
            width: '100%' 
          }}
        >
          <Grid container spacing={6} textAlign="center">
          <Grid item xs={12} sm={12} md={6}>
            <CardMedia
            component="img"
            className="tentang_image"
            image={gambar}
            alt="Live from space album cover"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
            <Typography
              mb= {6}
              pb={2}
              component="h3"
              variant="h4"
              align="left"
              color="text.primary"
              gutterBottom
              className="judul"
            >
              TENTANG USAHAKUY<span>.</span>ID
            </Typography>
            <Typography 
              variant="h8" 
              align="justify" 
              color="text.secondary" 
              paragraph>
            Usahakuy.id merupakan pelatihan kewirausahaan berbasis website. Usahakuy.id menawarkan pelatihan-pelatihan menarik yang sangat dibutuhkan dalam dunia entrepreneur atau kewirausahaan melalui coaching yang diberikan untuk mempersiapkan calon wirausahawan agar dapat menjadi wirausahawan yang sukses dengan membantu meningkatkan kapasitas dan kemampuan SDM pelaku wirausaha dan masyarakat yang belum mampu mengatasi persoalan di dunia kewirausahaan.
            </Typography>
            <Stack
              sx={{ pt: 3 }}
              direction="row"
              spacing={5}
              justifyContent="left"
              padding-right="20px"
            >
              <button className='btn btn-custom'>
                  Daftar Sekarang
                </button>
              {/* <Button variant="contained" background-color="primary">Daftar Sekarang</Button> */}
            </Stack>
          </Grid>
          </Grid>
        </Box>
       
      </main>
   
    </ThemeProvider>
  );
}
