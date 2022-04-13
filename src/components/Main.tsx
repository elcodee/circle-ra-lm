import { useEffect, useState } from "react";
import { getAllEvent } from "../req/event";

export default function Main() {
  const [event, setEvent] = useState<Array<any>>([]);

  const getEvent = async () => {
    let res: any = await getAllEvent();

    if (res) {
      setEvent(res);
    }
  };

  console.log("EVENT : ", event);

  useEffect(() => {
    getEvent();
  }, []);
  return (
    <section className="section bg-gray-100">
      <div className="container">
        <div className="row justify-content-center section-heading">
          <div
            className="col-lg-8 col-xl-7 text-center wow fadeInUp"
            data-wow-duration="0.5s"
          >
            <h3 className="h1 mb-3"> Ｃｉｒｃｌｅ ૨α</h3>
            <h6 className="text-primary mb-2">Events</h6>
            {/* <div className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div> */}
          </div>
        </div>
        <div className="row gy-4">
          {event
            ? event.map((item, index) => {
                return (
                  <div
                    className="col-lg-4 wow fadeInUp"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.1s"
                    key={index + 1}
                  >
                    <div className="card hover-scale-box hover-top">
                      <div className="card-body p-5">
                        <h5>{item.nama}</h5>

                        <ul>
                          <li>
                            <b>Waktu : </b> {item.waktu}
                          </li>
                        </ul>
                        <div className="display-5 lh-1 text-primary d-flex m-0 opacity-2">
                          Daftar <span className="bi bi-arrow-right ms-auto" />
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
