import MyButton from './MyButton'
import PropTypes from 'prop-types'

const JasaCard = ({ children, image, desc }) => {
  let thumbnail
  let to

  // Button path
  const path = children.split(' ').join('-').toLowerCase()
  to = path

  // Assign thumbnail according to image data-type
  if (image instanceof Array === true) {
    thumbnail = image[0]
  } else {
    thumbnail = image
  }

  return (
    <div className="shadow-xl flex flex-col bg-white relative z-[8] md:max-w-[80%] md:mx-auto">
      <div className="max-h-[200px] sm:max-h-[300px] overflow-hidden cursor-pointer">
        <img
          className="w-full h-full object-cover hover:scale-[1.2] duration-300"
          src={thumbnail}
          alt={`"${children} image"`}
        />
      </div>
      <div className="px-2 py-2 flex-[1] flex flex-col justify-between">
        <h1 className="text-primary-darkest font-[600] text-center sm:text-xl break-words">
          {children}
        </h1>
        <p className="text-[13px] text-slate-400 text-center my-1">{desc}</p>
        <div className="mt-2 mx-auto">
          <MyButton size="button-small" hiddenAtMobile to={to}>
            Lihat Detail
          </MyButton>
        </div>
      </div>
    </div>
  )
}

JasaCard.propTypes = {
  children: PropTypes.string.isRequired,
  image: PropTypes.node,
  desc: PropTypes.string.isRequired,
}

export default JasaCard
