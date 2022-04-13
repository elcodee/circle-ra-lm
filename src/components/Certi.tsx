import { useEffect, useState } from "react";
import { getAllCertificate } from "../req/certi";

export default function Certificate() {
  const [certi, setCerti] = useState<Array<any>>([]);

  const getCerti = async () => {
    let res: any = await getAllCertificate();

    if (res) {
      setCerti(res);
    }
  };

  console.log("CERTI : ", certi);

  useEffect(() => {
    getCerti();
  }, []);
  return (
    <section id="blog" data-scroll-index={3} className="section">
      <div className="container">
        <div className="row justify-content-center section-heading">
          <div
            className="col-lg-8 col-xl-7 text-center wow fadeInUp"
            data-wow-duration="0.5s"
          >
            {/* <h6 className="text-primary mb-2">Blogs</h6> */}
            <h3 className="h1 mb-3 text-primary">Certificate</h3>
            <p className="lead m-0">Sertifikat Resmi Dari PartyChat-id.</p>
          </div>
        </div>
        <div className="row gy-4">
          {certi
            ? certi.map((item, index) => {
                return (
                  <div
                    className="col-lg-4 wow fadeInUp"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.05s"
                    key={index + 1}
                  >
                    <div className="card hover-scale overflow-hidden border">
                      <a href="#" className="position-relative hover-scale-in">
                        <img src={item.img} className="card-img-top" alt="" />
                        {/* <span className="position-absolute bg-primary text-white px-4 py-1 top-0 start-0 mt-3 ms-3 rounded-pill small">
                          <i className="bi bi-calendar" /> 02 Mar 2019
                        </span> */}
                      </a>
                      <div className="card-body">
                        <h4>{item.nama}</h4>
                        <p>{item.desc}</p>
                        <div className="d-flex pt-3 align-items-center">
                          {/* <div className="nav">
                            <span className="px-3 py-1 bg-primary-soft text-primary rounded-pill me-2">
                              <i className="bi bi-chat" />
                              <small>20</small>
                            </span>
                            <span className="px-3 py-1 bg-primary-soft text-primary rounded-pill">
                              <i className="bi bi-heart me-1" />
                              <small>20</small>
                            </span>
                          </div> */}
                          <a className="ms-auto link-effect" href="#">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
}
