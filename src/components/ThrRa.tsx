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
      setPrize(res.reduce((n: any, { point }: any) => n + point, 0));
    }
  };

  console.log("SUM : ", peserta);

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
          <div className="alert alert-dark" role="alert">
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
              <li>Total Prize Pool : 10 Orang = Hadiah</li>
              <li>Prize Pool Tergantung Banyaknya Peserta Yang Mendaftar</li>
            </ol>
            <div className="d-grid gap-2">
              <button className="btn btn-dark btn-sm" onClick={() => notif()}>
                Gabung
              </button>
            </div>
          </div>

          <div className="alert alert-secondary" role="alert">
            <strong>
              <h2 style={{ textAlign: "center" }}>Prize Pool</h2>
            </strong>
            <hr />
            <strong>
              <h3 style={{ textAlign: "center" }}>
                💎 {prize ? prize.toLocaleString("id") : 0}
              </h3>
            </strong>
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
                            <td>-</td>
                            <td>
                              <a href="">-</a>
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
