import React from 'react'
import Esonnxx from '../assets/portfolio/Esonnxx.png'
import AKAAKA from '../assets/portfolio/AKAAKA.png'
import Sarah from '../assets/portfolio/Sarah.png'
import Fade from 'react-reveal/Fade'

const Portfolio = () => {
  const projects = () => [
    {
      id: 1,
      src: Esonnxx,
      name: 'Esonnxx',
      describe: 'Unity & 網站',
      text: '"如果程式有Bug，請祝福他"',
    },
    {
      id: 2,
      src: AKAAKA,
      name: 'AKAAKA',
      describe: 'Unity',
      text: '"如果程式有Bug，請祝福他"',
    },
    {
      id: 3,
      src: Sarah,
      name: 'Mario',
      describe: 'Unity場景程式 & 美術',
      text: '"大家早安~! 我要睡了"',
    },
  ]

  return (
    <div name="projects" className="w-full">
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full">
        <Fade bottom>
          <div>
            <p className="text-4xl font-bold inline ">團隊成員</p>
            <p className=""></p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 py-0 sm:px-0 relative ">
            {projects().map(({ id, src, name, describe, text }) => (
              <div key={id} className="border-gray-50 rounded-full">
                <img
                  src={src}
                  alt="projects"
                  className="duration-200 hover:scale-105"
                />
                <div className="flex items items-center justify-center ">
                  <p className="  text-2xl px-6 p-3 m-0 duration-200 hover:scale-105">
                    {name}
                  </p>
                </div>
                <p className=" text-center text-lg px-6 p-0 m-0 duration-200 hover:scale-105">
                  {describe}
                </p>
                <p className=" text-center text-m px-6 p-0 m-1 duration-200 hover:scale-105">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Portfolio
