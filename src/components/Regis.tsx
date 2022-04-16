export default function Regis(props: any) {
  console.log("REFF : ", props.referal);

  return (
    <section id="about" data-scroll-index={1} className="section">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div
            className="col-lg-6 pe-xl-10 mt-0  wow fadeInLeft"
            data-wow-duration="0.5s"
            data-wow-delay="0.1s"
          >
            {/* <h6 className="text-primary mb-3">What We provide</h6> */}
            <h3 className="h1 mb-2">Join Circle</h3>
          </div>
        </div>
        <div className="border-top pt-6 pt-lg-8 mt-2 mt-lg-8" />
        <div
          className="row gy-4 wow fadeInUp"
          data-wow-duration="0.5s"
          data-wow-delay="0.05s"
        >
          <div className="col-md-12">
            <div className="d-flex">
              <div>
                <div className="alert alert-warning" role="alert">
                  <strong>PENTING !</strong>
                  <hr />
                  <p>
                    Member yang mendaftar wajib mengikuti aturan selama masa
                    trial sebagai berikut :
                    <br />
                    <br />
                    <ol>
                      <li>
                        Tidak Menerima Member{" "}
                        <b>Parkun / Kutu Loncat / Pansos</b>.
                      </li>
                      <li>Wajib Pakai Title Di Nama & Bio.</li>
                      <li>Wajib Masuk Family Di Litmatch.</li>
                      <li>
                        Member Baru Wajib Ikut Trial 1 Minggu Untuk Penilaian
                        Dari Co-Captain & Admin.
                      </li>
                      <li>
                        Dilarang membuat kerusuhan atau menjatuhkan family /
                        circle lain.
                      </li>
                      <li>
                        Sisanya baca disini <a href="/rules">Rules</a> .
                      </li>
                    </ol>
                  </p>
                </div>
                {/* <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="nama"
                    placeholder="name"
                  />
                  <label htmlFor="nama">Nama</label>
                </div> */}

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="username"
                  />
                  <label htmlFor="username">Username LM</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="idlm"
                    placeholder="60c616cxxxxxxxxxxx"
                  />
                  <label htmlFor="idlm">ID LM</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Jabatan"
                    placeholder="Member Trial"
                    value="Member Trial"
                    disabled
                  />
                  <label htmlFor="Jabatan">Jabatan</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Jabatan"
                    value="Member"
                    hidden
                  />
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Alasan gabung circle ra"
                    id="alasan"
                    style={{ height: "100px" }}
                    defaultValue={""}
                  />
                  <label htmlFor="alasan">Alasan Gabung</label>
                </div>

                {/* <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="referal"
                    value={props.referal ? props.referal : `𓂀 › lil ҽӀ`}
                    disabled
                  />
                  <label htmlFor="referal">Referal</label>
                </div>

                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="referal"
                    value={props.idlm ? props.idlm : `60c616c736aa8016cd9c2fa1`}
                    hidden
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
