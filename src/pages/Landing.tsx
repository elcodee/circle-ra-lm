import Swal from "sweetalert2";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import { HistoryRouterProps } from "react-router-dom";

function Landing() {
  // Swal.fire({
  //   imageUrl: "/img/ra-thr.png",
  //   confirmButtonText: "OK",
  //   confirmButtonColor: "#8d3523",
  // });

  Swal.fire({
    imageUrl: "/img/circle-ra-thr.png",
    showDenyButton: true,
    confirmButtonText: "DAFTAR",
    confirmButtonColor: "#8d3523",
    denyButtonText: `TUTUP`,
    denyButtonColor: "#70707c",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      window.open("/ra-thr");
    } else if (result.isDenied) {
      // Swal.fire("Changes are not saved", "", "info");
    }
  });

  return (
    <>
      {/* Skippy */}
      <a
        id="skippy"
        className="sr-only sr-only-focusable u-skippy"
        href="#content"
      >
        {/* <div className="container">
          <span className="u-skiplink-text">Skip to main content</span>
        </div> */}
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
          {/* Home */}
          <LandingPage />
        </main>
      </div>
    </>
  );
}

export default Landing;
