import React from 'react'
import Fade from 'react-reveal/Fade'
function test() {}

const Contact = () => {
  return (
    <div name="contact" className="w-full md:h-screen">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <Fade bottom>
          <div className="pb-8">
            <p className="text-4xl font-bold inline">聯絡我們</p>
          </div>

          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/2567f384-d79f-43a0-ad93-48473602cf69"
              method="POST"
              className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                name="name"
                required
                placeholder="如何稱呼"
                className="p-2 bg-transparent border-carbon-100 border-2 rounded-md  focus:outline-wmelon-100"
              />

              <input
                type="text"
                name="email"
                placeholder="電子信箱"
                required
                className="p-2 my-4 bg-transparent border-carbon-100 border-2 rounded-md  focus:outline-wmelon-100"
              />

              <textarea
                name="message"
                rows="10"
                placeholder="想跟我們說些什麼?"
                required
                className="p-2 resize-none bg-transparent border-2 border-carbon-100 rounded-md  focus:outline-wmelon-100"></textarea>

              <button className="text-white bg-secondary px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-bold">
                聯絡我們
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Contact
