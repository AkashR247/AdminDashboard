import React from 'react'
import 
{BsDashSquareDotted, BsGrid1X2Fill, BsFillArchiveFill, BsCurrencyRupee, BsPeopleFill, 
   BsMenuButtonWideFill, BsQuestionCircleFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsDashSquareDotted  className='icon_header'/> Dashboard 
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="0">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="0">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            
            <li className='sidebar-list-item'>
                <a href="0">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="0">
                    < BsCurrencyRupee className='icon'/> Income
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="0">
                    <BsMenuButtonWideFill className='icon'/> Promote
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="0">
                    <BsQuestionCircleFill className='icon'/> Help
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
