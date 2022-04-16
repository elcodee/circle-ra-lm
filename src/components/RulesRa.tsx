export default function RulesRa(props: any) {
  return (
    <section id="about" data-scroll-index={1} className="section">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div
            className="col-lg-6 pe-xl-10  wow fadeInLeft"
            data-wow-duration="0.5s"
            data-wow-delay="0.1s"
          >
            {/* <h6 className="text-primary mb-3">What We provide</h6> */}
            <h3 className="h1 mb-2">Rules</h3>
            {/* <p className="lead pb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a className="btn btn-primary" href="#">
              Get Started
            </a> */}
          </div>
        </div>
        <div className="border-top pt-6 pt-lg-8 mt-6 mt-lg-8" />
        <div
          className="row gy-4 wow fadeInUp"
          data-wow-duration="0.5s"
          data-wow-delay="0.05s"
        >
          <div className="col-md-4">
            <div className="d-flex">
              <div className="icon-sm rounded-circle bg-secondary text-dark">
                1
              </div>
              <div className="col ps-3">
                <h6 className="mb-1">SOPAN</h6>
                <p className="m-0">
                  Saling menghargai & menghormati sesama member circle / family
                  lain & utamakan ucap salam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex">
              <div className="icon-sm rounded-circle bg-secondary text-dark">
                2
              </div>
              <div className="col ps-3">
                <h6 className="mb-1">IDENTITAS</h6>
                <p className="m-0">
                  Wajib CN (Change Name) menggunakan title & masuk ke family
                  tanpa terkecuali.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex">
              <div className="icon-sm rounded-circle bg-secondary text-dark">
                3
              </div>
              <div className="col ps-3">
                <h6 className="mb-1">DEWASA</h6>
                <p className="m-0">
                  Tidak Baperan (harus bisa menerima kritik & saran orang lain
                  selama itu benar).
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex">
              <div className="icon-sm rounded-circle bg-secondary text-dark">
                4
              </div>
              <div className="col ps-3">
                <h6 className="mb-1">TANGGUNG JAWAB</h6>
                <p className="m-0">
                  Jika ada masalah sesama circle/family lain, tolong
                  diseleseikan secara dewasa (berani memulai berani bertanggung
                  jawab).
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex">
              <div className="icon-sm rounded-circle bg-secondary text-dark">
                5
              </div>
              <div className="col ps-3">
                <h6 className="mb-1">KONTRIBUSI</h6>
                <p className="m-0">
                  Aktif di dalam room & BERPARTISIPASI di kegiatan circle (jika
                  berhalangan, tolong di konfimasikan ke Captain / CO Captain /
                  Admin), dan circle ra tidak pernah ada paksaan bayar KAS atau
                  TOPUP untuk event / party.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
