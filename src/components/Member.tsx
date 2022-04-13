import { useEffect, useState } from "react";
import { getAllMember } from "../req/member";

export default function Member() {
  const [member, setMembers] = useState<Array<any>>([]);

  const getMember = async () => {
    let res: any = await getAllMember();
    if (res) {
      setMembers(res);
    }
  };

  console.log("MEMBER : ", member);

  useEffect(() => {
    getMember();
  }, []);
  return (
    <section id="price" data-scroll-index={2} className="section bg-gray-100">
      <div className="container">
        <div className="row justify-content-center section-heading">
          <div
            className="col-lg-8 col-xl-7 text-center wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.1s"
          >
            {/* <h6 className="text-primary mb-2">Price Table</h6> */}
            <h3 className="h1 mb-3">Members</h3>
            <p className="lead m-0">List member circle ra</p>
          </div>
        </div>
        <div className="row gy-4">
          {member
            ? member.map((item, index) => {
                return (
                  <div
                    className="col-md-4 wow fadeInUp"
                    data-wow-duration="0.5s"
                    data-wow-delay="0.05s"
                    key={index + 1}
                  >
                    <div className="card border">
                      <div className="card-header text-center py-5 border-bottom">
                        <div className="icon-lg text-white rounded-3 mb-4">
                          <img
                            className="logo-light"
                            src="/img/logo.png"
                            alt="ra-logo"
                            width={55}
                            // style={{ marginLeft: 15 }}
                          />
                        </div>
                        <h5>{item.nama}</h5>
                        <span>{item.role}</span>
                      </div>
                      {/* <div className="card-body px-4 py-4 border-bottom text-center">
                        <div className="h1 mb-0 pb-2 lh-1">$10</div>
                        <span>Billed monthly per user</span>
                        <div className="pt-3">
                          <a className="btn btn-primary-light" href="#">
                            Get Started
                          </a>
                        </div>
                      </div> */}
                      <div className="card-body px-4 py-3">
                        <ul className="list-unstyled mb-0">
                          <li className="py-0">
                            {/* <i className="bi-check-circle-fill text-success me-1" />{" "} */}
                            <ul>
                              <li>
                                <b>Litmatch ID :</b> {item.lm_id}
                              </li>

                              <li>
                                <b>Joined :</b> {item.register_at}
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>

        {/* <div className="row pt-6">
          <div
            className="col-md-6 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.1s"
          >
            <div className="d-flex py-3">
              <div className="icon-sm text-primary">
                <i className="bi bi-question-circle-fill fs-5 lh-1" />
              </div>
              <div className="col ps-3">
                <h6>How about Refund policy?</h6>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="d-flex py-3">
              <div className="icon-sm text-primary">
                <i className="bi bi-question-circle-fill fs-5 lh-1" />
              </div>
              <div className="col ps-3">
                <h6>Can I Pay with PayPal?</h6>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="d-flex py-3">
              <div className="icon-sm text-primary">
                <i className="bi bi-question-circle-fill fs-5 lh-1" />
              </div>
              <div className="col ps-3">
                <h6>Is There a Free Trial?</h6>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.1s"
          >
            <div className="d-flex py-3">
              <div className="icon-sm text-primary">
                <i className="bi bi-question-circle-fill fs-5 lh-1" />
              </div>
              <div className="col ps-3">
                <h6>Do I get free support?</h6>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="d-flex py-3">
              <div className="icon-sm text-primary">
                <i className="bi bi-question-circle-fill fs-5 lh-1" />
              </div>
              <div className="col ps-3">
                <h6>Can I pay with credit card?</h6>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="d-flex py-3">
              <div className="icon-sm text-primary">
                <i className="bi bi-question-circle-fill fs-5 lh-1" />
              </div>
              <div className="col ps-3">
                <h6>How to I cancel subscriptions?</h6>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
