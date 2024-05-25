import { Container, Row, Col } from "react-bootstrap";
import Faq from "../components/Faq";

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                Syarat & Ketentuan
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Syarat dan ketentuan berikut mengatur penggunaan layanan
                penyewaan coach dan teman mabar online.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="pt-5 animate__animated animate__fadeInUp animate__delay-1s">
              <p>
                Dengan menggunakan layanan kami, Anda menyetujui syarat dan
                ketentuan yang telah ditetapkan. Harap membaca dengan seksama
                untuk memahami hak dan kewajiban Anda sebagai pengguna.
              </p>
            </Col>
          </Row>
          <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
            <Col>
              <h4 className="fw-bold animate__animated animate__fadeInUp animate__delay-1s">1. Pendaftaran</h4>
              <p>
                Untuk menggunakan layanan, pengguna harus mendaftar dengan
                memberikan informasi yang akurat dan lengkap. Setiap pengguna
                bertanggung jawab atas keamanan akun mereka dan harus segera
                melaporkan aktivitas mencurigakan kepada kami.
              </p>
            </Col>
          </Row>
          <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
            <Col>
              <h4 className="fw-bold animate__animated animate__fadeInUp animate__delay-1s">2. Pemesanan Layanan</h4>
              <p>
                Pengguna dapat memesan layanan melalui aplikasi dengan memilih
                coach atau teman mabar yang tersedia. Harap memastikan
                ketersediaan dan jadwal yang telah disepakati.
              </p>
              <p>
                Biaya layanan harus dibayar di muka sesuai dengan tarif yang
                telah ditentukan. Kami tidak bertanggung jawab atas
                keterlambatan atau pembatalan dari pihak coach atau teman mabar.
              </p>
            </Col>
          </Row>
          <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
            <Col>
              <h4 className="fw-bold animate__animated animate__fadeInUp animate__delay-1s">3. Pembatalan dan Pengembalian Dana</h4>
              <p>
                Pembatalan pemesanan dapat dilakukan sesuai dengan kebijakan
                pembatalan yang berlaku. Pengembalian dana hanya akan diberikan
                jika pembatalan dilakukan dalam jangka waktu yang ditentukan.
              </p>
              <p>
                Jika coach atau teman mabar membatalkan pemesanan, pengguna
                berhak mendapatkan pengembalian dana penuh atau memilih
                pengganti sesuai ketersediaan.
              </p>
            </Col>
          </Row>
          <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
            <Col>
              <h4 className="fw-bold animate__animated animate__fadeInUp animate__delay-1s">4. Tanggung Jawab Pengguna</h4>
              <p>
                Pengguna harus mematuhi semua aturan yang ditetapkan oleh coach
                atau teman mabar selama sesi berlangsung. Pengguna dilarang
                melakukan tindakan yang melanggar hukum atau merugikan pihak
                lain.
              </p>
            </Col>
          </Row>
          <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
            <Col>
              <h4 className="fw-bold animate__animated animate__fadeInUp animate__delay-1s">5. Penyelesaian Sengketa</h4>
              <p>
                Setiap sengketa yang timbul dari penggunaan layanan akan
                diselesaikan melalui negosiasi terlebih dahulu. Jika negosiasi
                gagal, sengketa akan diselesaikan sesuai dengan hukum yang
                berlaku.
              </p>
            </Col>
          </Row>
          <Row className="py-3 animate__animated animate__fadeInUp animate__delay-1s">
            <Col>
              <h4 className="fw-bold animate__animated animate__fadeInUp animate__delay-1s">6. Perubahan Syarat & Ketentuan</h4>
              <p>
                Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu.
                Pengguna diharapkan untuk selalu memeriksa halaman ini untuk
                mengetahui perubahan terbaru. Penggunaan layanan setelah
                perubahan dianggap sebagai persetujuan terhadap syarat dan
                ketentuan yang telah diperbarui.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Faq />
    </div>
  );
};

export default SyaratKetenPage;
