import React from 'react'
import './header.css'
function header() {
  return (
    <>
    <div className='topheader'>
      <div className='header1'>
          <div className='header2'>
            <div className='Image'>
              <div className='img1'>
                <img src="img/Image.png" alt="" />
              </div>
              <div className='img2'>
                <img src="img/ImageM.png" alt="" />
              </div>
            </div>
            <div className='content'>
              <div className='headline'>
                  <div className='text1'>Reliable, secure conference to get the best events</div>
                  <div className='text2'>Hold incredible events, share knowledge, build and grow your product , create opportunity</div>
              </div>
              <div className='containe'>
                <button className='button2'>
                  <div className='text3'>Create Conference</div>
                </button>
                <button className='button3'>
                  <div className='text4'>Watch story</div>
                  <div className='arrow'> <img src="img/arrow-right.svg" alt="" /></div>
                </button>
            </div>
          </div> 
      </div>
    </div>
    </div>
    <div className='partnar'>
    <div className='partnarship'>
      <div className='lissponsor'>
          <div className='logo1'>
            <img src="img/Logo 1.svg" alt="" />
            <img src="img/Logo 2.svg" alt="" />
          </div>
          <div className='logo3'>
            <img src="img/Logo 3.svg" alt="" />
            <img src="img/Logo 4.svg" alt="" />
          </div>
          <div className='logo5'>
            <img src="img/Logo 5.svg" alt="" />
            <img src="img/Logo 6.svg" alt="" />
          </div>
          <div className='logo7'>
            <img src="img/Logo 7.svg" alt="" />
            <img src="img/Logo 8.svg" alt="" />
          </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default header
