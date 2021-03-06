import React from "react";
import Swal from "sweetalert2";
import About from "../components/About";
import Certificate from "../components/Certi";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Member from "../components/Member";

function Members() {
  // Swal.fire({
  //   title: "Maintenance !",
  //   text: "This website is under contruction, maintenanced by lil el",
  //   icon: "warning",
  //   confirmButtonText: "Tutup",
  //   confirmButtonColor: "#8d3523",
  // });

  return (
    <>
      {/* Skippy */}
      <a
        id="skippy"
        className="sr-only sr-only-focusable u-skippy"
        href="#content"
      >
        <div className="container">
          <span className="u-skiplink-text">Skip to main content</span>
        </div>
      </a>

      {/* Preload */}
      {/* <div id="loading" className="preloader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}

      <div className="wrapper">
        {/* Header */}
        <Header />

        <main>
          {/* Section 1 */}
          <About
            title="Member Ｃｉｒｃｌｅ ૨α."
            desc="Hati-Hati bila bertemu orang yang rusuh / toxic menggunakan title kami & tidak terdaftar di sini itu bukan urusan kami."
            btn="Join"
            link="/daftar"
          />

          {/* Section 3 */}
          <Member />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Members;
