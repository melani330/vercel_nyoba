import React from "react";
import Cardpelatihan from "../components/CardpelatihanAfter";
import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function Pelatihan() {
  return (
    <div id="pelatihanafter">
      <Box sx={{ p: 3, marginLeft: "5%" }}>
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
          <Link to="/pelatihan">
                <Typography className="sign">
                  {"Lihat Semua >>>"}
                  </Typography>
                </Link>
          {/* <Button color="secondary">{"Lihat Semua >>>"}</Button> */}
        </Box>
        <Cardpelatihan />
      </Box>
    </div>
  );
}

export default Pelatihan;
