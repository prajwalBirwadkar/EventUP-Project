import React from 'react'
import './about.css'
const about = () => {
  return (
    <div className='about'>
        <div className='about1'>
            <div className='Assets'>
                <div className='Assetsimg'>
                    <img src="img/Assets.svg" alt="" />
                </div>
                <div className='Assetsimg2'>
                    <img src="img/AssetsM.svg" alt="" />
                </div>
            </div>
            <div className='Copy'>
            <div className='headline1'>
            Everyone on theirown device.
            </div>
            <div className='body1'>
             <b>EventUp</b> is designed to be inclusive, by being able to use your own device to help hybrid-conference teams create, collaborate and celebrate together.
            </div>
        </div>
        </div>    
    </div>
  )
}

export default about

