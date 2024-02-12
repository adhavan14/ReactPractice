import React, { useState } from 'react';
import { Content } from './Content';

const Card = () => {

  const contents = Content

  const [isSelected, setIsSelected] = useState(null)

  const handleSelected = (index) => {
      setIsSelected(index)
  }

  return (
    <div className='grid grid-cols-2 gap-4 mt-10 mx-auto p-4'>
        {
          contents.map((content, index) => {
            return <div className='flex justify-center rounded-xl items-center h-20 bg-[#472393]'
            style={{background : index != isSelected ? '#472393' : '#986ff0'}}
              onClick={() => handleSelected(index)}>
              {index != isSelected ? <h3 className='text-white'>{content.question}</h3> : <h3>{content.answer}</h3>} 
            </div>
          })
        }
    </div>
  )
};

export default Card;
