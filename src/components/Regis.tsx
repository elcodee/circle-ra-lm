import { useState } from "react";
import { saveNewMember } from "../req/member";

export default function Regis(props: any) {
  const [input, setInput] = useState<any>({});
  const [isErr, setIsErr] = useState<any>({
    err: false,
    msg: "",
  });
  const [isDone, setIsDone] = useState<any>({
    done: false,
    msg: "",
  });

  const handleInputs = async (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleDaftar = async () => {
    if (!input.nama) {
      setIsErr({
        err: true,
        msg: "Username LM tidak boleh kosong",
      });
    }
    if (!input.lm_id) {
      setIsErr({
        err: true,
        msg: "ID LM tidak boleh kosong",
      });
    }
    if (!input.alasan) {
      setIsErr({
        err: true,
        msg: "Alasan Gabung tidak boleh kosong",
      });
    }
    if (!input.token) {
      setIsErr({
        err: true,
        msg: "Token tidak boleh kosong",
      });
    }
    if (!input.setuju) {
      setIsErr({
        err: true,
        msg: "Wajib setuju rules yang berlaku",
      });
    }

    if (input.token !== "17sept2021") {
      setIsErr({
        err: true,
        msg: `Token tidak valid, silahkan minta ke captain`,
      });
    }

    if (input.lm_id.length < 23) {
      setIsErr({
        err: true,
        msg: "ID LM tidak valid",
      });
    }
    if (
      input.nama &&
      input.lm_id &&
      input.alasan &&
      input.token &&
      input.setuju
    ) {
      let data = {
        nama: input.nama,
        lm_id: input.lm_id,
        register_at: "",
        user_role: "Trial",
        alasan: input.alasan,
        token: 0,
        link_token: "",
        topup: 0,
        link_topup: "",
      };
      let res: any = await saveNewMember(data);
      if (res) {
        setIsDone({
          done: true,
          msg: "",
        });

        setTimeout(() => {
          window.open(
            "https://chat.whatsapp.com/F6toVFIZjz46rQmlMJzwbv",
            "_blank"
          );
        }, 3000);
      }
    }
  };

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
            <h3 className="h1">Join Circle</h3>
          </div>
        </div>
        <div className="border-top pt-6 pt-lg-8 mt-2 " />
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
                        Tidak Menerima Member
                        <b> Parkun / Kutu Loncat / Pansos</b>.
                      </li>
                      <li>Wajib Pakai Title.</li>
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

                {isErr.err ? (
                  <div className="alert alert-danger" role="alert">
                    {isErr.msg}
                  </div>
                ) : null}

                {isDone.done ? (
                  <div className="alert alert-danger" role="alert">
                    Pendaftaran Berhasil
                  </div>
                ) : null}
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
                    name="nama"
                    onChange={(e) => handleInputs(e)}
                    placeholder="username"
                  />
                  <label htmlFor="username">Username LM</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="idlm"
                    name="lm_id"
                    onChange={(e) => handleInputs(e)}
                    placeholder="60c616c7xxxxxxxxxxx"
                  />
                  <small>
                    <b>Contoh : </b> 60c616c7xxxxxxxxxxx
                  </small>
                  <label htmlFor="idlm">ID LM</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Alasan gabung circle ra"
                    id="alasan"
                    name="alasan"
                    onChange={(e) => handleInputs(e)}
                    style={{ height: "150px" }}
                    defaultValue={""}
                  />
                  <label htmlFor="alasan">Alasan Gabung</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="token"
                    name="token"
                    onChange={(e) => handleInputs(e)}
                    placeholder="60c616c7xxxxxxxxxxx"
                  />
                  <small>
                    <i>
                      Tidak punya token ? Silahkan Minta Ke Captain{" "}
                      <a href="/member">
                        <b>Disini</b>
                      </a>
                    </i>
                  </small>
                  <label htmlFor="token">Token Daftar</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="role"
                    name="user_role"
                    onChange={(e) => handleInputs(e)}
                    placeholder="Member"
                    value="Member"
                    disabled
                  />
                  <label htmlFor="role">Role</label>
                </div>

                <div className="form-check" style={{ marginBottom: 10 }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="invalidCheck"
                    name="setuju"
                    required
                    onChange={(e) => handleInputs(e)}
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Saya setuju dengan semua rules yang ada.
                  </label>
                </div>

                <div className="d-grid gap-2">
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => handleDaftar()}
                  >
                    Daftar
                  </button>
                </div>

                {isDone.done ? (
                  <div
                    className="alert alert-success"
                    role="alert"
                    style={{ marginTop: 20 }}
                  >
                    <b>Pendaftaran Berhasil</b>
                    <hr />
                    Link otomatis masuk grup Whatsapp dalam 3 detik, atau bisa
                    klik{" "}
                    <a href="https://chat.whatsapp.com/F6toVFIZjz46rQmlMJzwbv">
                      disini
                    </a>
                  </div>
                ) : null}

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
