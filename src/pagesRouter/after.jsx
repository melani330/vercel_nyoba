import * as React from "react";
import Footer from "../components/footer";
import NavbarAfter from "../components/navbar/navbarAfter";
import Tentang from "../components/tentang";
import Pendaftaran from "../components/pendaftaran";
import DataPendaftaran from "../data/pendaftaran.json";
import DataCoach from "../data/coach.json";
import Coach from "../components/coach";
import SmoothScroll from "smooth-scroll";
import Pelatihan from "../pages/PelatihanAfter";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function After() {
  return (
    <div>
      <NavbarAfter />
      <Tentang/>
      <Pendaftaran DataPendaftaran={DataPendaftaran}/>
      <Pelatihan/> 
      <Coach DataCoach={DataCoach}/>
      <Footer />
    </div>
  );
}

export default After;

