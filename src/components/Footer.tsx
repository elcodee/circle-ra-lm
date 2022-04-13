export default function Footer() {
  return (
    <footer
      className="footer effect-section bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url(https://wallpaperaccess.com/full/127058.jpg)",
      }}
    >
      <div className="mask bg-black opacity-8" />
      <div className="py-7 py-md-8 py-lg-10 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 pe-xl-5 mb-lg-0">
              <div className="pb-3">
                <img src="/img/logo.png" width={70} alt="" />
              </div>
              <p className="m-0 text-white-85">
                Kurang kurangin gaya elit tapi ekonomi sulit :)
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0 position-relative" />
      <div className="container py-4 position-relative">
        <p className="m-0 small text-center text-white-85">
          © 2021 - 2022 &nbsp; Ｃｉｒｃｌｅ ૨α &nbsp; Created by{" "}
          <a href="#!" target="_blank" className="link-white">
            lil el
          </a>
        </p>
      </div>
    </footer>
  );
}
