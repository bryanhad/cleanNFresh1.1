import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'

const customers = [
    {
      name: 'Sylviana',
      review:
        'Mantab, kasur jadi seperi baru lagi. Ngeri pas ngeliat kotoran di vacuumnya 🥴',
      stars: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
      ],
      color: 'bg-sky-300',
    },
    {
      name: 'Dolly',
      review:
        'Alhamdulillah, pekerjanya sangat teliti ..tidak ada yang kurang ..Terima kasih.',
      stars: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      color: 'bg-amber-300',
    },
    {
      name: 'Bapak Hautono',
      review:
        'Bagus banget! Orang tua aku sampai bilang kaya baru lagi mobilnya. Mobilnya juga jadi wangi.',
      stars: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarHalf />,
      ],
      color: 'bg-blue-300',
    },
    {
      name: 'Jessica',
      review:
        'Sangat puas. Karyawannya rapi dan teliti sekali. Ramah juga. Saya suka sekali.',
      stars: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
      ],
      color: 'bg-red-300',
    },
    {
      name: 'Ibu Sisca',
      review:
        'Mantab. Bersih sekali. Ketolong banget jadi ga dekil..',
      stars: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
      ],
      color: 'bg-purple-300',
    },
    {
      name: 'Ibu Rina',
      review:
        'Puas bangeeettt Bersih bangeeeettt. Gak kayak yang lainnya',
      stars: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
      ],
      color: 'bg-lime-300',
    },
  ]

  export default customers