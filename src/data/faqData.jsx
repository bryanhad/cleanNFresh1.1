// react icons
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdPhoneAndroid } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdCleaningServices } from "react-icons/md";

// images
import LOGO from "../assets/illustrations/greetings.png";
import orderImg from "../assets/illustrations/orderingGood.png";
import cleaningImg from "../assets/illustrations/cleaningGood.png";
import othersImg from "../assets/illustrations/others.png";
import { Link } from "react-router-dom";

const importantTextStyle = "text-primary-darkest font-[500]";
const iconStyle = ""

const faqs = [
  {
    category: { title: "Tentang Clean'n Fresh", icon: <AiOutlineInfoCircle className={iconStyle} /> },
    background: LOGO,
    questions: [
      {
        title: "Siapa itu Clean'n Fresh?",
        answer: (
          <p>
            <span className={importantTextStyle}>Clean&apos;n Fresh</span>{" "}
            adalah provider jasa service yang bergerak di bidang pemberihsan
            rumah, ruko, apartemen, kantor, dan lain-lain.
          </p>
        ),
      },
      {
        title: "Kenapa saya harus memilih Clean'n Fresh?",
        answer: (
          <div>
            <h1 className={importantTextStyle}>
              Berikut alasan kenapa Clean&apos;n Fresh merupakan pilihan yang
              tepat:
            </h1>
            <ul className="list-disc ml-4 flex flex-col gap-2 my-4 marker:text-primary-darkest">
              <li>Layanan service yang pastinya memuasakan.</li>
              <li>Harga yang sangat terjangkau.</li>
              <li>
                Alat Pembersih berteknologi tinggi yang sudah mendapatkan
                sertifikat Internasional.
              </li>
              <li>
                Penggunaan obat anti kuman yang terbaik dan tentunya aman untuk
                bayi.
              </li>
              <li>Pekerja yang sudah terlatih dan terseleksi secara ketat.</li>
              <li>Prosedur layanan pembersihan yang telah ter-standarisasi.</li>
              <li>Pengalaman Clean&apos;n Fresh yang sudah bertahun-tahun.</li>
              <li>Menjangkau hingga JADETABEK dan kota Medan.</li>
              <li>
                Pengalman kami yang luas, mulai dari melayani rumah, apartemen,
                kantor besar, gedung, sekolahan, tempat kursus, salon/spa,
                gedung reflexology/massage, bahkan Hotel bintang 4.
              </li>
            </ul>
            <h1>
              Anda dapat melihat segala aktivitas Clean&apos;n Fresh melalui
              instagram kami{" "}
              <Link
                className={importantTextStyle}
                to="https://www.instagram.com/clean_n_freshh/"
                target="_blank"
              >
                clean_n_freshh
              </Link>
            </h1>
          </div>
        ),
      },
      {
        title: "Layanan apa saja yang Clean'n Fresh sediakan?",
        answer: (
          <>
            <p className={importantTextStyle}>
              Clean&apos;n Fresh menyediakan berbagai jenis jasa, diantaranya:
            </p>
            <ul className="list-disc ml-4 marker:text-primary-darkest flex flex-col gap-2 mt-2">
              <li>
                <h1 className={importantTextStyle}>Vacuum Hydrocleaning</h1>
                <p>
                  Untuk memberantas kutu tungau pada kasur, sofa, dan perabotan
                  rumah lainnya.
                </p>
              </li>
              <li>
                <h1 className={importantTextStyle}>Vacuum + cuci</h1>
                <p>
                  Untuk membersihkan noda kasur, sofa, karpet, dan lain-lain.
                  Serta menyamarkan bau tidak sedap sehingga perabotan terlihat
                  jauh lebih bersih.
                </p>
              </li>
              <li>
                <h1 className={importantTextStyle}>
                  Fogging / semprot disinfektan
                </h1>
                <p>
                  Untuk mencegah, memberantas, dan menghilangkan virus-virus
                  seperti virus covid-19.
                </p>
              </li>
              <li>
                <h1 className={importantTextStyle}>General Cleaning</h1>
                <p>
                  Untuk membersihkan rumah, kantor, apartemen, ruko, klinik
                  kecantikan, dan lain-lain.
                </p>
              </li>
              <li>
                <h1 className={importantTextStyle}>Car Cleaning</h1>
                <p>
                  Pembersihan yang mencakup seluruh bagian dalam mobil. Mobil
                  akan tampil seperti baru lagi.
                </p>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Bagaimana perhitungan harga jasa pembersihan Clean'n Fresh?",
        answer: (
          <p>
            Anda dapat menghubungi kami lewat WhatsApp kami di{" "}
            <Link
              className={importantTextStyle}
              target="_blank"
              to="https://wa.me/6281511057728?text=Halo%20clean'n%20Fresh,%20saya%20butuh%20bantuan"
            >
              0815-1105-7728
            </Link>{" "}
            untuk kami bagikan daftar harga.
          </p>
        ),
      },
      {
        title: "Jam Operasional Clean'n Fresh?",
        answer: (
          <p>
            Kami buka pada hari{" "}
            <span className={importantTextStyle}>Senin - Sabtu</span> pukul{" "}
            <span className={importantTextStyle}>08:00 - 18:00</span>. Kami juga
            melayani kunjungan pada hari Minggu untuk{" "}
            <span className={`text-primary-darkest italic`}>
              special request
            </span>
          </p>
        ),
      },
    ],
  },
  {
    category: { title: "Pemesanan Layanan", icon: <MdPhoneAndroid className={iconStyle} /> },
    background: orderImg,
    questions: [
      {
        title: "Bagaimana cara saya pesan layanan Clean'n Fresh?",
        answer: (
          <h1>
            Anda dapat langsung menghubungi Clean&apos;n Fresh lewat WhatsApp
            kami <span className={importantTextStyle}>0815-1105-7728</span>
          </h1>
        ),
      },
      {
        title:
          "Berapa lama waktu yang dibutuhkan petugas kebersihan hingga sampai?",
        answer: (
          <p>
            <span className={importantTextStyle}>Tergantung</span> dari seberapa
            jauh lokasi anda, mengenai detailnya dapat ditanyakan saat anda
            memesan lewat WhatsApp kami.),
          </p>
        ),
      },
      {
        title: "Bisakah saya mengubah alamat pembersihan setelah pemesanan?",
        answer: (
          <p>
            Tentu boleh, asalkan masih dalam kurun waktu{" "}
            <span className={importantTextStyle}>1 hari sebelum</span>{" "}
            dilaksanakannya pembersihan
          </p>
        ),
      },
      {
        title: "Bagaimana metode pembayaran layanan Clean'n Fresh?",
        answer: (
          <p>
            Metode pembayaran dapat dilakukan dengan{" "}
            <span className={importantTextStyle}>cash</span> atau menggunakan{" "}
            <span className={importantTextStyle}>layanan transfer Bank</span>.
          </p>
        ),
      },
      {
        title: "Bolehkah saya request lebih dari 1 petugas kebersihan?",
        answer: (
          <p>
            Jumlah petugas kebersihan yang berkunjung ditentukan dari banyaknya
            perabotan atau luas tempat yang akan dikerjakan. <br /> <br />{" "}
            <span className={importantTextStyle}>
              Anda tidak perlu khawatir
            </span>{" "}
            mengenai kekurangan petugas kebersihan karena kami selalu memastikan
            pelanggan kami mendapatkan hasil yang memuaskan.
          </p>
        ),
      },
      {
        title:
          "Dapatkah saya memesan petugas kebersihan favorit pada pesanan berikutnya?",
        answer: (
          <p>
            Boleh, asalkan tetap{" "}
            <span className={importantTextStyle}>
              memperhatikan jadwal dan ketersediaan
            </span>{" "}
            dari petugas favorit anda.
          </p>
        ),
      },
      {
        title:
          "Dapatkah saya memesan langsung secara pribadi ke petugas Clean'n Fresh?",
        answer: (
          <p>
            <span className={importantTextStyle}>Tidak</span>. Seluruh jadwal
            berkunjung disusun oleh admin kami dan semua petugas kebersihan kami
            hanya akan menerima order lewat admin kami.
          </p>
        ),
      },
    ],
  },
  {
    category: { title: "Tindakan Pembersihan", icon: <MdCleaningServices className={iconStyle} /> },
    background: cleaningImg,
    questions: [
      {
        title:
          "Apakah semua alat dan peralatan pembersih disediakan oleh Clean'n Fresh?",
        answer: (
          <p>
            <span className={importantTextStyle}>Tentu saja!</span> Kami membawa
            semua peralatan kebersihan yang diperlukan sesuai dengan keperluan
            dan metode pembersihan yang telah dipesan.
          </p>
        ),
      },
      {
        title: "Apakah ada yang perlu saya siapkan?",
        answer: (
          <p>
            Ada beberapa hal yang perlu pastikan, yakni adalah{" "}
            <span className={importantTextStyle}>akses air kran</span> dan{" "}
            <span className={importantTextStyle}>
              listrik dengan watt diatas 1300
            </span>
            .
          </p>
        ),
      },
    ],
  },
  {
    category: { title: "Lain-lain", icon: <AiOutlineQuestionCircle className={iconStyle} /> },
    background: othersImg,
    questions: [
      {
        title: "Apakah Clean'n Fresh menyediakan promo?",
        answer: (
          <p>
            <span className={importantTextStyle}>Tentu ada!</span> Untuk periode
            waktu tertentu, adakalanya kami menyediakan promo menarik. Berita
            terkini dapat dilihat di Instagram kami{" "}
            <Link
              className={importantTextStyle}
              to="https://www.instagram.com/clean_n_freshh/"
              target="_blank"
            >
              clean_n_freshh
            </Link>
            .
          </p>
        ),
      },
      {
        title:
          "Bagaimana cara saya agar selalu mengetahui berita atau promo terkini dari Clean'n Fresh?",
        answer: (
          <p>
            Anda dapat mengecek Instagram kami di{" "}
            <Link
              className={importantTextStyle}
              to="https://www.instagram.com/clean_n_freshh/"
              target="_blank"
            >
              clean_n_freshh
            </Link>{" "}
            atau anda juga dapat langsung menanyakan perihal berita ataupun
            promo yang sedang berlaku melalui WhatsApp kami di{" "}
            <Link
              className={importantTextStyle}
              target="_blank"
              to="https://wa.me/6281511057728?text=Halo%20clean'n%20Fresh,%20saya%20butuh%20bantuan"
            >
              0815-1105-7728
            </Link>
          </p>
        ),
      },
      {
        title: "Apakah Clean'n Fresh menerima kerjasama atau sponsor?",
        answer: (
          <p>
            Untuk saat ini kami belum pernah bekerjasama dengan pihak lain.
            Namun bila anda tertarik, anda dapat langsung menghubungi WhatsApp
            kami di{" "}
            <Link
              className={importantTextStyle}
              target="_blank"
              to="https://wa.me/6281511057728?text=Halo%20clean'n%20Fresh,%20saya%20butuh%20bantuan"
            >
              0815-1105-7728
            </Link>
          </p>
        ),
      },
    ],
  },
];

export default faqs;
