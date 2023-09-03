import React from 'react'
import FooterItems from './FooterItems'
import { TeamMembers, ContactUs, Tech } from './Items'

const ItemContainer = () => {
  return (
    <div className=" mt-0 text-center grid grid-cols-3 gap-6 sm:px-8 px-1 pb-8">
      <FooterItems Links={TeamMembers} title="團隊成員"></FooterItems>
      <FooterItems Links={ContactUs} title="聯絡我們"></FooterItems>
      <FooterItems Links={Tech} title="技術"></FooterItems>
    </div>
  )
}
export default ItemContainer
