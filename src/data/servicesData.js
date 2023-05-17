import vacuumOnly_1 from '../assets/photos/vacuumOnlyGood.png'
import vacuumCuci from '../assets/photos/vacuumCuciGood-v2.png'
import fogging from '../assets/photos/foggingGood.png'
import general_1 from '../assets/photos/generalCleaning2.jpg'
import general_2 from '../assets/photos/generalCleaning1.jpg'
import general_3 from '../assets/photos/generalCleaning3.jpg'
import mobil_1 from '../assets/photos/carCleaning3.jpg'
import mobil_2 from '../assets/photos/carCleaning1.jpg'
import mobil_3 from '../assets/photos/carCleaning2.jpg'


const services = [
    {
        image: vacuumOnly_1,
        title: 'Vacuum Hydrocleaning',
        desc: 'Memberantas kutu tungau pada kasur, sofa, dll.',
        fulldesc: 'aaa',
    },
    {
        image: vacuumCuci,
        title: 'Vacuum dan Cuci',
        desc: 'Membersihkan noda serta bau tidak sedap dari kasur, sofa, karpet dll. ',
        fulldesc: 'bbb',
    },
    {
        image: fogging,
        title: 'Fogging',
        desc: 'Menyemprotkan disinfektan untuk memberantas virus covid-19.',
        fulldesc: 'ccc',
    },
    {
        image: [general_1, general_2, general_3],
        title: 'General Cleaning',
        desc: 'Membersihkan secara keseluruhan untuk rumah, kantor, apartemen, dll.',
        fulldesc: 'ddd',
    },
    {
        image: [mobil_1, mobil_2, mobil_3],
        title: 'Cleaning Mobil',
        desc: 'Membersihkan mobil dari noda dan bau tidak sedap.',
        fulldesc: 'eee',
    },
]

export default services