// react icons
import {MdPhoneAndroid} from 'react-icons/md'

// images
import supportImg from '../assets/illustrations/support.svg'

const faqs = [
    {
        category: { title: 'Tentang Clean\'n Fresh', icon: <MdPhoneAndroid/>},
        questions: [
            {
                title: 'Siapa itu Clean\'n Fresh?',
                answer: 'Clean\'n Fresh adalah provider jasa service yang bergerak di bidang pemberihsan rumah, ruko, apartemen, kantor, dan lain-lain.'
            },
            {
                title: 'Kenapa saya harus memilih Clean\'n Fresh?',
                answer: (<div>
                    <h1>Berikut alasan kenapa Clean&apos;n Fresh merupakan pilihan yang tepat:</h1>
                    <ul className="list-disc ml-4   ">
                        <li>Layanan service yang pastinya memuasakan.</li>
                        <li>Harga yang sangat terjangkau.</li>
                        <li>Alat Pembersih berteknologi tinggi yang sudah mendapatkan sertifikat Internasional.</li>
                        <li>Penggunaan obat anti kuman yang terbaik dan tentunya aman untuk bayi.</li>
                        <li>Pekerja yang sudah terlatih dan terseleksi secara ketat.</li>
                        <li>Prosedur layanan pembersihan yang telah ter-standarisasi.</li>
                        <li>Pengalaman Clean&apos;n Fresh yang sudah bertahun-tahun.</li>
                        <li>Menjangkau hingga JADETABEK dan kota Medan.</li>
                        <li>Pengalman kami yang luas, mulai dari melayani rumah, apartemen, kantor besar, gedung, sekolahan, tempat kursus, salon/spa, gedung reflexology/massage, bahkan Hotel bintang 4.</li>
                    </ul>
                    <h1>Anda dapat melihat segala aktivitas Clean&apos;n Fresh melalui instagram kami @clean_n_freshh</h1>
                </div>)
            },
            {
                title: 'Apa sih latar belakang dari pekerja Clean\'n Fresh?',
                answer: 'blablablablabla'
            },
            {
                title: 'Apakah layanan Clean\'n Fresh ada di daerah saya?',
                answer: 'blablablablabla'
            },
            {
                title: 'Layanan apa saja yang Clean\'n Fresh sediakan?',
                answer: 'blablablablabla'
            },
            {
                title: 'Bagaimana perhitungan harga jasa pembersihan Clean\'n Fresh?',
                answer: 'blablablablabla'
            },
            {
                title: 'Jam Operasional Clean\'n Fresh?',
                answer: 'blablablablabla'
            },
        ]
    },
    {
        category: { title: 'Pemesanan Layanan', icon: <MdPhoneAndroid/>},
        questions: [
            {
                title: 'Bagaimana cara saya pesan layanan Clean\'n Fresh?',
                answer: (<div className='grid grid-cols-2'>
                    <h1>Anda dapat menghubungi Clean&apos;n Fresh lewat WhatsApp kami <span>0815-11057725   </span> </h1>
                    <img className='max-h-[100px]' src={supportImg} alt="" />
                </div>)
            },
            {
                title: 'Berapa lama waktu yang dibutuhkan petugas kebersihan hingga sampai?',
                answer: 'blablablablabla'
            },
            {
                title: 'Bisakah saya mengubah alamat pembersihan setelah pemesanan?',
                answer: 'blablablablabla'
            },
            {
                title: 'Bagaimana prosedur pembayaran layanan Clean\'n Fresh?',
                answer: 'blablablablabla'
            },
            {
                title: 'Bolehkah saya request lebih dari 1 petugas kebersihan?',
                answer: 'blablablablabla'
            },
            {
                title: 'Bisakah saya memilih gender petugas kebersihan?',
                answer: 'blablablablabla'
            },
            {
                title: 'Dapatkah saya memesan petugas kebersihan favorit pada pesanan berikutnya?',
                answer: 'blablablablabla'
            },
            {
                title: 'Dapatkah saya memesan langsung secara pribadi ke petugas Clean\'n Fresh?',
                answer: 'blablablablabla'
            },
        ]
    }, 
    {
        category: { title: 'Tindakan Pembersihan', icon: <MdPhoneAndroid/>},
        questions: [
            {
                title: 'Apakah semua alat dan peralatan pembersih disediakan oleh Clean\'n Fresh?',
                answer: 'blablablablabla'
            },
            {
                title: 'Apakah ada yang perlu saya siapkan?',
                answer: 'blablablablabla'
            },
            {
                title: 'Bagaimana jika petugas kebersihan terlambat?',
                answer: 'blablablablabla'
            },
            {
                title: 'Bagaimana jika petugas kebersihan tidak hadir di lokasi yang dijanjikan?',
                answer: 'blablablablabla'
            },
            {
                title: 'Apakah saya harus berada di lokasi yang dijanjikan selama proses pembersihan berlangsung?',
                answer: 'blablablablabla'
            },
            {
                title: 'Dapatkah saya mempercayai petugas kebersihan Clean\'n Fresh?',
                answer: 'blablablablabla'
            },
            {
                title: 'Bagaimana jika terdapat kerusakan atau kehilangan selagi atau sesudah proses pembersihan?',
                answer: 'blablablablabla'
            },
            {
                title: 'Apa prosedur setelah petugas kebersihan selesai melakukan tugasnya?',
                answer: 'blablablablabla'
            },
            {
                title: 'Apa yang dapat saya lakukan jika terdapat keluhan?',
                answer: 'blablablablabla'
            },
        ]
    },
    {
        category: { title: 'Lain-lain', icon: <MdPhoneAndroid/>},
        questions: [
            {
                title: 'Apakah Clean\'n Fresh menyediakan promo?',
                answer: 'blablablablabla'
            },
            {
                title: 'Bagaimana cara saya agar selalu mengetahui berita terkini dari Clean\'n Fresh?',
                answer: 'blablablablabla'
            },
            {
                title: 'Apakah saya dapat melamar kerja di Clean\'n Fresh?',
                answer: 'blablablablabla'
            },
            {
                title: 'Apakah Clean\'n Fresh menerima kerjasama atau sponsor?',
                answer: 'blablablablabla'
            },
        ]
    }
]

export default faqs