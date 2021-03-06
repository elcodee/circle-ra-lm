import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../App.css";
import { getAllThrEvent } from "../req/thr";

export default function ThrRa(props: any) {
  const [peserta, setPeserta] = useState<any>([]);
  const [prize, setPrize] = useState<any>(0);

  const notif = async () => {
    Swal.fire({
      title: "Coming soon !",
      text: "Event Belum Di Mulai",
      icon: "warning",
      confirmButtonText: "Tutup",
      confirmButtonColor: "#8d3523",
    });
  };

  const getThr = async () => {
    let res: any = await getAllThrEvent();
    if (res) {
      setPeserta(res);
      setPrize(res.reduce((n: any, { point }: any) => n + point + 135, 0));
    }
  };

  const handleSearch = async (e: any) => {
    let filter: any = peserta.filter((x: any) => x.id_lm === e.target.value);
    if (filter) {
      setPeserta(filter);
    }

    if (e.target.value === "") {
      getThr();
    }
  };

  const info = async () => {
    Swal.fire({
      html: `
      <div className=""text-start">
      <h3>Cara Bergabung</h3>
      <hr />
      DM Ke Anggota <a href="/member">Ｃｉｒｃｌｅ ૨α</a><br /><br />
      <b>Contoh Format </b><br />
      ID LM : 12345678910 (ID Angka) <br />
      USERNAME LM : 𓂀 › lil ҽӀ <br />
      </div>`,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  useEffect(() => {
    getThr();
  }, []);
  return (
    <>
      <section
        id="about"
        data-scroll-index={1}
        className="section"
        style={{ marginTop: -50 }}
      >
        <div className="container">
          {/* <div className="alert alert-dark" role="alert">
            <strong>INFO</strong>
            <hr />
            <ol>
              <li>
                Cukup Daftar Saja Tanpa Di Pungut Biaya / Gift Sepeserpun.
              </li>
              <li>Setiap Orang hanya bisa 1x ikut & Cuma 1 Akun</li>
              <li>
                Nama Akan Di Acak Pada Hari Terakhir Di{" "}
                <a href="https://wheelofnames.com/id/" target="tab">
                  wheelofnames.com
                </a>
              </li>
              <li>Total Prize Pool Max 💎 30.000</li>
              <li>Total Pemenang 10 Orang</li>
              <li>Total Prize Pool : 10 Orang = Hadiah 💎</li>
              <li>
                Nilai Prize Pool Tergantung Banyaknya Peserta Yang Mendaftar
              </li>
              <li>Slot Tersedia Tak Terbatas</li>
            </ol>
            <div className="d-grid gap-2">
              <button className="btn btn-dark btn-sm" onClick={() => info()}>
                Gabung
              </button>
            </div>
          </div> */}

          {/* <div className="alert alert-secondary" role="alert">
            <strong>
              <h2 style={{ textAlign: "center" }}>Prize Pool</h2>
            </strong>
            <hr />
            <strong>
              <h3 style={{ textAlign: "center" }}>
                💎 {prize ? prize.toLocaleString("id") : 0}
              </h3>
            </strong>
          </div> */}

          <div className="alert alert-success" role="alert">
            <strong>INFORMASI </strong>
            <hr />
            <ul>
              <li>
                Selamat Kepada 10 Orang Pemenang, Lihat bukti Lengkap{" "}
                <a
                  href="https://files.elcodee.com/circle-ra/pemenang-thr/bukti.png"
                  target="tab"
                >
                  Klik Disini
                </a>
                .
              </li>
              <li>
                Hadiah 💎 Akan Di bagikan lusa 26 April 2022 pukul 10 pagi.
              </li>
              <li>Bagi 10 Pemenang Yang Beruntung Silahkan DM Ke 𓂀 › lil ҽӀ</li>
              <hr />
              <li>
                Terima Kasih Banyak Yang Sudah Ikut Berpartisipasi, Di Tunggu
                Event-Event Circle Ra Yang Akan Datang stay Tune.
              </li>
            </ul>
          </div>

          <div
            className="row gy-4 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.05s"
          >
            <div className="col-md-12">
              <strong className="blink_me" style={{ color: "green" }}>
                Total Peserta : {peserta.length} Orang
              </strong>
              <br />
              <strong className="" style={{ color: "blue", fontSize: 12 }}>
                Last Update : 25 Apr 2022 | 20.12 PM
              </strong>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  style={{ marginTop: 10 }}
                  id="cariID"
                  name="idLm"
                  onChange={(e) => handleSearch(e)}
                  placeholder="cariID"
                />
                <label htmlFor="cariID">Cari ID LM</label>
              </div>
              <div
                className="d-flex table-responsive"
                style={{ marginTop: 10 }}
              >
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">User LM</th>
                      <th scope="col">ID LM</th>
                      <th scope="col">Hadiah</th>
                      <th scope="col">Bukti</th>
                    </tr>
                  </thead>
                  <tbody>
                    {peserta.length != 0 ? (
                      peserta.map((item: any, index: any) => {
                        return (
                          <tr key={index + 1}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.username}</td>
                            <td>{item.id_lm}</td>
                            <td>
                              {item.hadiah ? `💎 ${item.hadiah}` : "💎 0"}
                            </td>
                            <td>
                              <a
                                href={item.link_bukti ? item.link_bukti : ""}
                                target="tab"
                              >
                                {item.link_bukti ? "Lihat" : "-"}
                              </a>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <th scope="row">1</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                          <a href="">-</a>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
