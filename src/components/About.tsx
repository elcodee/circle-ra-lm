export default function About(props: any) {
  return (
    <section
      className="section effect-section bg-cover bg-fixed"
      style={{
        backgroundImage: "url(/img/ra-banner-1.png)",
      }}
    >
      <div className="mask bg-black opacity-6" />
      <div className="container position-relative">
        <div className="row align-items-center mt-5">
          <div
            className="col-lg-6 pe-xl-12 wow fadeInLeft"
            data-wow-duration="1.5s"
            data-wow-delay="1s"
          >
            <h2 className="h1 mb-3 text-white">{props.title}</h2>
            <p className="text-white-85">{props.desc}</p>
            {props.btn ? (
              <div className="pt-2">
                <a className="btn btn-outline-light" href={props.link}>
                  {props.btn}
                </a>
              </div>
            ) : null}
          </div>
          {/* <div
            className="col-lg-6 wow fadeInRight"
            data-wow-duration="0.5s"
            data-wow-delay="0.1s"
          >
            <img
              src="https://uiocean.com/wrap/mombo/assets/img/feature/feature-03.png"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
