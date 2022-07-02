import * as React from "react";
import data from "../data/pendaftaran.json";
import Navbar from "../components/Navbar";
import Tentang from "../components/tentang";
import Pendaftaran from "../components/pendaftaran";
import Footer from "../components/footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Tentang />
      <Pendaftaran data={data} />
      <div>
        <Tentang />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
