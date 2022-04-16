import React from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Regis from "../components/Regis";

function Daftar() {
  let { referal, idlm } = useParams();

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
            title="Káthe fos den eínai aparaítita o ílios."
            desc="Tidak semua cahaya itu matahari dan tidak semua cahaya bisa di
              percaya."
          />

          {/* Section 3 */}
          <Regis referal={referal ? referal : ``} idlm={idlm ? idlm : ``} />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Daftar;
