import { useState } from "react";

export default function ThrRa(props: any) {
  const [arr, setArr] = useState<any>([
    "𓂀 › lil ҽӀ",
    "𓂀 › Mყ Qυҽҽɳ♥️",
    "𓂀 › ᴇʙᴅɪ",
    "𓂀 › 𝔭𝔞𝔨𝔠𝔦",
    "𓂀 › 𝕽𝖎𝖆𝖓𝖆ツ",
    "𓂀 › 𝙱𝚄𝙻𝙾𝙷",
  ]);
  return (
    <>
      <section
        id="about"
        data-scroll-index={1}
        className="section"
        style={{ marginTop: -50 }}
      >
        <div className="container">
          {/* <div className="row gy-5 align-items-center">
            <div
              className="col-lg-6 pe-xl-10 mt-0 wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay="0.1s"
            >
              <h3 className="h1 mb-2">૨α &nbsp; Bagi-Bagi THR</h3>
            </div>
          </div>
          <div className="border-top pt-6 pt-lg-8 mt-2" /> */}
          <div className="alert alert-dark" role="alert">
            <strong>INFO</strong>
            <hr />
            <ol>
              <li>Setiap Orang hanya bisa 1x ikut & Cuma 1 Akun.</li>
              <li>
                Nama Akan Di Acak Pada Hari Terakhir Di{" "}
                <a href="https://wheelofnames.com/id/">wheelofnames.com</a>.
              </li>
              <li>Total Hadiah Max 💎 20.000.</li>
              <li>Total Pemenang 10 Orang.</li>
              <li>
                Cara Hitung : <i>Total Prize Pool : 10 Orang = Hadiah</i>.
              </li>
            </ol>
          </div>

          <div className="alert alert-info" role="alert">
            <strong>
              <h2 style={{ textAlign: "center" }}>Prize Pool</h2>
            </strong>
            <hr />
            <strong>
              <h3 style={{ textAlign: "center" }}>💎 4.098</h3>
            </strong>
          </div>

          <div
            className="row gy-4 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.05s"
          >
            <div className="col-md-12">
              <strong style={{ color: "green" }}>
                Total Peserta : 5 Orang
              </strong>
              <div className="d-flex">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">User LM</th>
                      <th scope="col">ID LM</th>
                      <th scope="col">Hadiah</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>𓂀 › lil ҽӀ</td>
                      <td>1697160143</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>𓂀 › lil ҽӀ</td>
                      <td>1697160143</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>𓂀 › lil ҽӀ</td>
                      <td>1697160143</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>𓂀 › lil ҽӀ</td>
                      <td>1697160143</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>𓂀 › lil ҽӀ</td>
                      <td>1697160143</td>
                      <td>-</td>
                    </tr>
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
