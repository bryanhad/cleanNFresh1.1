import React, { useState } from 'react'
import faqs from '../data/faqData'
import MyAccordion from './MyAccordion'


const MultipleAccordions = () => {
    const [activeCategory, setActiveCategory] = useState(0)
    const [activeItem, setActiveItem] = useState(null)

    const toggle = (index) => {
        if (activeCategory === index) {
            return    
        }
        
        setActiveItem(null)
        setActiveCategory(index)
    }

  return (
    <div className='max-w-[1240px] mx-auto  rounded-xl overflow-hidden'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center font-[500]  bg-slate-100'>
            {faqs.map((faq, i) => (
                <div key={i} onClick={() => toggle(i)} className={`px-5 py-6 cursor-pointer ${activeCategory === i ? 'category aktif' : 'category'}`}>{faq.category}</div>
            ))}
        </div>
        <div>
            <MyAccordion array={faqs[activeCategory].questions} activeItem={activeItem} setActiveItem={setActiveItem}/>    
        </div>
    </div>
  )
}

export default MultipleAccordions