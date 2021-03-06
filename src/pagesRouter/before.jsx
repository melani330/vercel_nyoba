import * as React from "react";
// import {Component} from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar/Navbar";
import Tentang from "../components/tentang";
import Pendaftaran from "../components/pendaftaran";
import DataPendaftaran from "../data/pendaftaran.json";
import DataCoach from "../data/coach.json";
import Coach from "../components/coach";
import Slider from "../components/Slider/Slider";

function Before () {
    return (
      <div>
        <Navbar />
        <Slider/>
        <Tentang />
        <Pendaftaran DataPendaftaran={DataPendaftaran} />
        <Coach DataCoach={DataCoach} />
        <Footer />
      </div>
    );
  }


export default Before;
