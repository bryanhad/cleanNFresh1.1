import LOGO from '../assets/cleanNFreshLogo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="w-full px-4">
      <main className="max-w-[1240px] mx-auto grid ">
        <div>
            <img className="max-h-[30px]" src={LOGO} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem ipsum enim fugit perspiciatis expedita voluptates, officiis, laborum excepturi qui molestias quia!
            </p>
            <div>
                <FacebookIcon/>
                <InstagramIcon/>
            </div>
        </div>
        <div>
            <div>
                
            </div>
        </div>
      </main>
    </footer>
  )
}

export default Footer
