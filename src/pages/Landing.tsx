import Swal from "sweetalert2";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";

function Landing() {
  Swal.fire({
    title: "Maintenance !",
    text: "This website is under maintenance by lil el",
    icon: "warning",
    confirmButtonText: "OK",
    confirmButtonColor: "#8d3523",
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
