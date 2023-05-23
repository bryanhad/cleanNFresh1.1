// import LOGO from "../../assets/cleanNFreshLogo.png";
import vacuumImgMobile from "../../assets/photos/vacuumPromo.png";
import vacuumImg from "../../assets/photos/vacuumOnlyGood.png";
import saleTag from "../../assets/icons/saleTag.png";
// import bedBug from "../../assets/photos/bed-bug.jpg";
import Price from "../Price";
import MyButton from "../MyButton";

const PromoKasur = () => {
  return (
    <div className="md:grid md:grid-cols-2 ">
      <div className="hidden md:block ">
        <img className="w-full h-full object-cover" src={vacuumImg} alt="" />
      </div>

      <div className="text-center h-full w-full leading-none relative bg-white">
        <img
          className="w-full h-full object-cover absolute md:hidden top-0 left-0 z-[1] brightness-[60%] "
          src={vacuumImgMobile}
          alt=""
        />
        <div className="relative z-[2] text-white md:text-primary-darkest py-4">
          <h5 className="font-[200]">SPECIAL OFFER</h5>
          {/* title */}
          <div className="">
            <h2 className="font-bold text-[9vw] sm:text-[50px]">VACUUM</h2>
            <h1 className="font-bold text-[12vw] sm:text-[70px]">KASUR</h1>
          </div>
          <p>DISCOUNT 20%</p>
          {/* price TAG */}
          <div className="my-2 h-[40vw] sm:h-[230px] flex items-center">
            {/* band */}
            <div className="w-full h-[20vw] sm:h-[120px] bg-red-600 border-y-8 border-red-700/40 relative ">
              {/* circle with price */}
              <div className="absolute-xy-center w-[40vw] h-[40vw] max-w-[230px] max-h-[230px] flex items-center justify-center rounded-full p-4 border-8 bg-red-600 border-red-700">
                <Price
                  price={95}
                  color="text-white"
                  circleStyle="bg-amber-400 text-amber-700"
                />
                <img
                  className="absolute max-w-[15vw] sm:max-w-[100px] left-0 translate-x-[-50%] bottom-[20%] translate-y-[100%]"
                  src={saleTag}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* text & button */}
          <p className="mb-4">LIMITED TIME ONLY</p>
          <div className="mx-auto max-w-max">
            <MyButton size="button-small" hiddenAtMobile>
              Cek Sekarang
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoKasur;
