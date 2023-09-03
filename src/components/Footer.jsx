import React from 'react'
import ItemContainer from './ItemContainer'
import SocialIcons from './SocialIcons'
import { Icons } from './Items'

const Footer = () => {
  return (
    <footer className="bg-black-900 text-white">
      <div className="md: flex md:justify-between md:items-center sm:px-12 px-4 bg-black "></div>
      <ItemContainer></ItemContainer>
      <SocialIcons Icons={Icons}></SocialIcons>
      <div className=" text-center pt-0 text-white-400 text-sm pb-8">
        <span>© 2022 Esonnxx</span>
      </div>
    </footer>
  )
}

export default Footer
