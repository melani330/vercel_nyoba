import * as React from "react";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Tentang from "./components/tentang";
import Pendaftaran from "./components/pendaftaran";
import DataPendaftaran from "./data/pendaftaran.json";
import DataCoach from "./data/coach.json";
import Coach from "./components/coach";

function App() {
  return (
    <div>
      <Navbar />
      <Tentang/>
      <Pendaftaran DataPendaftaran={DataPendaftaran}/> 
      <Coach DataCoach={DataCoach}/>
      <Footer />
    </div>
  );
}

export default App;
