import React from 'react'

const FooterItems = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mt-0 font-bold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name} className="py-1">
          <a
            href={link.link}
            className="text-white-600 hover:text-secondary duration-300 curor-pointer leading-6">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
export default FooterItems
