import Burger from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const BurgerCloseButton = ({nav, setNav, zIndex}) => {
  return (
    <div className={`h-[50px] w-[50px] fixed ${zIndex} right-[20px] top-[15px] md:hidden`}>
      <div
        onClick={() => setNav(!nav)}
        className=" h-[50px] w-[50px] relative z-[4] flex justify-center items-center md:hidden"
      >
        {nav ? <CloseIcon /> : <Burger />}
      </div>
    </div>
  )
}

export default BurgerCloseButton
