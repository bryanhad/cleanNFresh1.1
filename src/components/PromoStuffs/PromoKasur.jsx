// import LOGO from "../../assets/cleanNFreshLogo.png";
import vacuumImgMobile from "../../assets/photos/vacuumPromo.png";
import vacuumImg from "../../assets/photos/vacuumOnlyGood.png";
import saleTag from "../../assets/icons/saleTag.png";
import crown from "../../assets/icons/crown.png";
import vacuumHand from "../../assets/photos/vacuumGood.png";
// import bedBug from "../../assets/photos/bed-bug.jpg";
import Price from "../Price";
import MyButton from "../MyButton";
import { useContext } from "react";
import { promoModalContext } from "../../context/promoModalContext";

const PromoKasur = () => {
  const {setShowPromoModal} = useContext(promoModalContext)
  return (
    <div className="md:grid md:grid-cols-2 ">
        <div className="hidden md:block ">
          <img className="w-full h-full object-cover" src={vacuumImg} alt="" />
        </div>

        <div className="text-center h-full w-full leading-none relative bg-white overflow-hidden">
          <img
            className="w-full h-full object-cover absolute md:hidden top-0 left-0 z-[1] brightness-[60%] "
            src={vacuumImgMobile}
            alt=""
          />
          <img
            className="hidden w-full h-full object-cover absolute md:block top-0 left-0 z-[1] brightness-[60%] blur-[1px] scale-[102%] "
            src={vacuumHand}
            alt=""
          />
          <div className="relative z-[2] text-white py-4">
            {/* <h5 className="font-[200] text-[3vw] sm:text-[18px] tracking-widest">SPECIAL OFFER</h5> */}
            {/* title */}
            <div className="">
              <h2 className="font-[300] text-[3vw] sm:text-[20px] translate-y-[1vw] sm:translate-y-[12px] tracking-widest">Vacuum Hydro Cleaning</h2>
              <h1 className="font-bold text-[11.5vw] sm:text-[70px] translate-y-[2vw] sm:translate-y-[15px]">KASUR</h1>
              <div className="relative max-w-max mx-auto">
                <h1 className="font-bold text-[16vw] sm:text-[98px] text-amber-400">KING</h1>
                <img className="absolute top-0 left-0 rotate-[-35deg] translate-x-[-28%] w-[6vw] sm:w-[34px]" src={crown} alt="crown icon" />
              </div>
            </div>
            <p className="font-[300] text-[2.8vw] sm:text-[16px]">seluruh sisi + 2 bantal + 2 guling</p>
            {/* price TAG */}
            <div className="my-2 h-[35vw] sm:h-[220px] flex items-center">
              {/* band */}
              <div className="w-full h-[18vw] sm:h-[110px] bg-red-600 border-y-8 border-red-700/40 relative ">
                {/* circle with price */}
                <div className="absolute-xy-center w-[32vw] h-[32vw] max-w-[220px] max-h-[220px] flex items-center justify-center rounded-full p-4 border-8 bg-red-600 border-red-700">
                  <Price
                    price={95}
                    color="text-white"
                    circleStyle="bg-amber-400 text-amber-700"
                  />
                  {/* <img
                    className="absolute max-w-[13vw] sm:max-w-[100px] left-0 translate-x-[-50%] bottom-[20%] translate-y-[100%]"
                    src={saleTag}
                    alt=""
                  /> */}
                </div>
              </div>
            </div>
            {/* text & button */}
            {/* <p className="mb-4">LIMITED TIME ONLY</p> */}
            <div className="mx-auto max-w-max mt-4">
              <MyButton size="button-small" hiddenAtMobile onclick={() => setShowPromoModal(false)} to='layanan'>
                Cek Sekarang
              </MyButton>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PromoKasur;
