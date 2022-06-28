import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { COURSE_DATA } from "../data/datapelatihan";

function Pelatihancard() {
  return (
    <>
      <Grid container spacing={2}>
        {COURSE_DATA.map((course, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  border: 1,
                  m: 1,
                  borderColor: "#4fc3f7",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={course.image} //NANTI DIISI GAMBAR SESUAI MATERI
                    alt="Gambar Materi"
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontWeight: 600 }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Registrasi: {course.tanggal_regis}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Kuota Peserta: {course.kuota_peserta}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ paddingLeft: "1rem" }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      paddingLeft: "35%",
                      paddingRight: "35%",
                      backgroundColor: "#4fc3f7",
                      color: "text.primary",
                    }}
                  >
                    Lihat Detail
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Pelatihancard;
