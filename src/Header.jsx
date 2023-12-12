import React from 'react'
import 
 {BsSearch, BsJustify}
 from 'react-icons/bs'
 import {PiHandWavingBold} from 'react-icons/pi'

 

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
          <p>Hello Shahrukh
            <PiHandWavingBold  className='icon'/>,
            </p>
        </div>
        <div className='header-right'>
            <BsSearch className='icon'/>
            
        </div>
    </header>
  )
}

export default Header