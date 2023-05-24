import PropTypes from "prop-types";

const Price = ({ price, color, circleStyle }) => {
  return (
    <div className={`text-[25vw] sm:text-[150px] font-bold ${color} relative`}>
      <span className="tracking-[-7px] pr-[5px] text-slate-400">
      {price}
      </span>
      <span className="absolute-xy-center">
        {price}
      </span>
      <span
        className={`font-[500] translate-x-[50%] translate-y-[-50%] top-[58%] right-0 text-[3vw] sm:text-[25px] absolute rounded-full ${circleStyle} w-[5vw] h-[5vw] sm:w-[40px] sm:h-[40px] flex justify-center items-center`}
      >
        rb
      </span>
    </div>
  );
};

Price.propTypes = {
  price: PropTypes.number,
  color: PropTypes.string,
  circleStyle: PropTypes.string,
};

export default Price;
