import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import CropFreeIcon from '@mui/icons-material/CropFree';


const mainFeaturedPost = {
  title: 'Detail Pelatihan',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/iusJ25iYu1c',
  imageText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Tema 1',
    date: 'Strategi Marketing',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/iusJ25iYu1c',
    imageLabel: 'Image Text',
  },
  {
    title: 'Tema 2',
    date: 'Technology Marketing',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/iusJ25iYu1c',
    imageLabel: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: '04 Juli 2022', url: '#' },
    { title: '18 Juli 2022', url: '#' },
    { title: '25 Juli  2022', url: '#' },
    { title: '08 Agustus 2022', url: '#' },
    { title: '15 Agustus 2022', url: '#' },
    { title: '22 Agustus 2022', url: '#' },
    { title: '25 Augustus 2022', url: '#' },
  ],
  social: [
    { name: 'Whatsapp Group', icon: WhatsAppIcon },
    { name: 'Google Meeting', icon: CropFreeIcon },
  ],
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
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Pengenalan Digital Marketing" />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Menjadi Usahawan Handal yang Berpengetahuan"
      />
    </ThemeProvider>
  );
}