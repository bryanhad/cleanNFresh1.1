import BubbleChartIcon from '@mui/icons-material/BubbleChart'


const TopPageTitle = ({direction, main, text, children, desc, iconPosition}) => {
  if (direction === 'left') {
    text = 'items-start text-left'
    iconPosition = 'left-[-10%]'

} else {
    text = 'items-end text-right'
    main = 'flex justify-end'
    iconPosition = 'right-[-10%]'
}

  return (
    <main className={`max-w-[1240px] ${main} min-h-[300px] flex items-center mx-auto relative z-[-1]`}>
        <div className="text-white relative px-4 sm:w-[90%] md:w-[70%] xl:w-[60%] ">
          <div className={`flex flex-col ${text} `}>
            <h1 className="text-5xl sm:text-6xl font-semibold mb-2 max-sm:break-words">{children}</h1>
            <p className="mb-4 text-sm sm:text-base">
              {desc}
            </p>
          </div>

          <div className={`hidden sm:block absolute top-[50%] translate-y-[-50%] ${iconPosition}`}>
            <BubbleChartIcon style={{fontSize:'600px'}} className='  text-primary-light/20'/>
          </div>
        </div>
    </main>
  )
}

export default TopPageTitle