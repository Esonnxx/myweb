import React from 'react'
import { Link } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Banner from '../assets/banner.png'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full ">
      <div className="max-w-screen-m  mx-auto flex flex-col justify-center w-full h-full">
        <img src={Banner} className="pb-0" />
        <Fade left>
          <div className="flex flex-col">
            <Link
              to="about"
              smooth
              duration={500}
              offset={100}
              className=" -mt-28 mx-auto my group font-bold text-3xl w-fit px-10 py-3 flex items-center rounded-md bg-secondary text-white cursor-pointer hover:scale-110 duration-300">
              關於尋
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Home
