import React from "react";
import Swal from "sweetalert2";
import About from "../components/About";
import Certificate from "../components/Certi";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Member from "../components/Member";
import RulesRa from "../components/RulesRa";

function Rules() {
  // Swal.fire({
  //   title: "Maintenance !",
  //   text: "This website is under contruction, maintenanced by lil el",
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
            title="Rules Ｃｉｒｃｌｅ ૨α."
            desc="Wajib Patuhi Aturan Yang Ada."
            btn="Join"
            link="/daftar"
          />

          {/* Section 3 */}
          <RulesRa />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Rules;
