import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './HeaderTema';
import MainFeaturedPost from './MainFeaturedPost';
import Footer from './Footer';
import TemaDetailStep from './steps';

const mainFeaturedPost = {
  title: 'Detail Tema Pelatihan',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/iusJ25iYu1c',
  imageText: 'main image description',
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Blog"/>
      <Container maxWidth="lg">
       
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <TemaDetailStep/>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Menjadi Usahawan Handal yang Berpengetahuan"
      />
    </ThemeProvider>
  );
}