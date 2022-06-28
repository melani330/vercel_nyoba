import React from "react";
import Navbarpelatihan from "../components/navbar/Navbarpelatihan";
import Cardpelatihan from "../components/Cardpelatihan";
import { Box, Typography } from "@mui/material";

function Pelatihan() {
  return (
    <div>
      <Navbarpelatihan />
      <Box sx={{ p: 3, marginTop:10, marginLeft: "5%" }}>
        <Box
          component="span"
          m={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={2}
        >
          <Typography>
            <h2>List Pelatihan</h2>
          </Typography>
          {/* <Button color="secondary">{"Lihat Semua >>>"}</Button> */}
        </Box>
        <Cardpelatihan />
      </Box>
    </div>
  );
}

export default Pelatihan;
