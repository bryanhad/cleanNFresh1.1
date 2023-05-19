


const PatternBackground = ({svg}) => {
  return (
    <div className='absolute z-[-2] bottom-0 left-0 w-full opacity-[20%] h-full customBackground' style={{backgroundImage: `url(${svg})`}}></div>
  )
}

export default PatternBackground