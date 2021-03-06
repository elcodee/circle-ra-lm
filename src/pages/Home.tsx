import React from "react";
import Swal from "sweetalert2";
import About from "../components/About";
import Certificate from "../components/Certi";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

function Dashboard() {
  // Swal.fire({
  //   title: "Maintenance !",
  //   text: "This website is under maintenanced by lil el",
  //   icon: "warning",
  //   confirmButtonText: "ok",
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
            btn="Join"
            link="/daftar"
          />

          {/* Section 2 */}
          <Main />

          {/* Section 3 */}
          <Certificate />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
