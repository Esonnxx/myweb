import React from 'react'
import { icons } from 'react-icons'

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-white-500 text-center pb-5">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className=" p-2 cursor_pointer inline-flex item-center round-full bg-gray-700 mx-1.5 text-xl hover:text-grey-100 hover:bg-secondary duration-300">
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  )
}

export default SocialIcons
