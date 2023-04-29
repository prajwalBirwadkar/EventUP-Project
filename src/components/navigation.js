import React from 'react'
import './navigationstyle.css'

function navigation() {
  return (
    <div className='navigationbar'>
    <div className='navigationtop'>
        <div className='logo'>
          <div className='logo1'>
            <img src="img/Logo.svg" alt="" />
          </div>
          <div className='logoM'>
            <img src="img/LogoM.svg" alt="" />
          </div>  
        </div>
        <div className='menu'>
          <img src="img/menu.svg" alt="" />
        </div>
        <div className='Navlist'>
          <div className='nav1'style={{cursor:"pointer"}}>
          Home
          </div>
          <div className='nav2'style={{cursor:"pointer"}}>
          Career
          </div>
          <div className='nav3'style={{cursor:"pointer"}}>
          Blog 
          </div>
          <div className='nav4'style={{cursor:"pointer"}}>
          About
          </div>
          <div className='nav5'style={{cursor:"pointer"}}>
          Pricing
          </div>

        </div>
        <div className='callaction'>
          <button className='log'>
          Log In
          </button>
          <button className='sing'>
          Sign Up
          </button>
        </div>
        
    </div>
    </div>
  )
}

export default navigation
