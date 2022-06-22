import React from 'react'
import * as GiIcon from 'react-icons/gi'
import * as FaIcon from 'react-icons/fa'
import * as BsIcon from 'react-icons/bs'
import * as AiIcon from 'react-icons/ai'
const NavStyle = ()=>{
    return (
        <style>
            {`
                .navbar-bg{
                    background-color: transparent;
                }
                #language{
                    border-radius: 5px;
                    padding: 3px 0px 3px 10px;
                    color: rgb(0, 82, 189);
                    background-color: white;
                }
                .ham{
                    cursor: pointer;
                }
                .nav-icon{
                    cursor: pointer;
                    color: white;
                }
                .main{
                    color:white;
                }
                
            `}
        </style>
    )
}
const Navbar = () => {
  return (
    <div>
        <section className="header">
        <nav class="navbar navbar-bg">
        <div class="container-fluid main">
            <span className='ms-3 nav-icon ham text-white'><GiIcon.GiHamburgerMenu/></span>
            <div className="right me-3">
                <span className='me-3 nav-icon text-white'><AiIcon.AiFillPlusCircle/></span>
                <span className='me-3 nav-icon text-white'><BsIcon.BsFillTagFill/></span>
                <span className='me-3 nav-icon text-white'><FaIcon.FaUserAlt/></span>

                <select className='me-3 ms-3' name="language" id="language">
                    <option value="hindi">hindi</option>
                    <option value="english">english</option>
                </select>
            </div>

        </div>
        </nav>
        </section>


        <NavStyle/>
    </div>
  )
}

export default Navbar