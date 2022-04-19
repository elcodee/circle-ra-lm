import React from "react";
import Swal from "sweetalert2";
import About from "../components/About";
import Certificate from "../components/Certi";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Member from "../components/Member";
import ThrRa from "../components/ThrRa";

function RaThr() {
  // Swal.fire({
  //   title: "Coming soon !",
  //   text: "Event Belum Di Mulai",
  //   icon: "warning",
  //   confirmButtonText: "Tutup",
  //   confirmButtonColor: "#8d3523",
  // });

  return (
    <>
      <div className="wrapper">
        {/* Header */}
        <Header />

        <main>
          {/* Section 1 */}
          <About
            title="Ｃｉｒｃｌｅ ૨α  -  THR"
            desc="Periode 23 April - 28 April 2022"
          />

          {/* Section 3 */}
          <ThrRa />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default RaThr;
