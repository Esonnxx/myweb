import React from 'react'
import Fade from 'react-reveal/Fade'

const About = () => {
  return (
    <div name="about" className="w-full">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="py-8 ">
          <Fade bottom>
            <p className="text-4xl font-bold inline ">遊戲故事</p>
            <p className="text-2xl pt-10 pb-8 text-justify">
              地球上有一個專門研究火星生態的太空團隊，除了研究火星物種以外，還要定期上火星勘查生態，其中有一位成員——A博士，有兩個雙胞胎女兒，在某次團隊出勤時，調皮的尾隨A博士上了火箭。
              抵達火星之後，躲在船上的雙胞胎意外發現團隊成員被火星奇形種複製再造，為了拯救團員們，雙胞胎踏開始了充滿刺激的火星之旅
            </p>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default About
