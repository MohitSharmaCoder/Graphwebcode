import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcon from 'react-icons/fa'
import * as BsIcon from 'react-icons/bs'
import * as AiIcon from 'react-icons/ai'
import * as BiIcon from 'react-icons/bi'
import * as MdIcon from 'react-icons/md'


const SideStyle = ()=>{
    return (
        <style>
            {`
                a{
                    text-decoration: none;
                    width: 100%;
                    height: 100%;
                    display:block;
                }
                .anchorone{
                    margin:30px 30px;
                }
                
                .sideNav{
                    background-color: white;
                    margin: 44px 14px 10px 14px;
                    border-radius: 10px;
                }
                .sideNav ul li{
                    border-radius: 10px;
                    margin:0px 10px;
                }
                .sideNav ul li .anchor{
                    display:block;
                    width: 100%;
                    height: 100%;
                    background-color: white;
                    color: black;
                    padding: 5px 10px;

                }
                .select{
                    border: none;
                    padding-right: 20px;
                    background-color: white;
                    color: black;
                    height: 100%;
                    display:inline-block;
                }
                .sideNav ul li:hover{
                    background-color: rgb(42, 116, 253);
                }
                .sideNav ul li:hover .select{
                    background-color: rgb(42, 116, 253);
                    color: white;
                }
                .sideNav ul li:hover .anchor{
                    background-color: rgb(42, 116, 253);
                    color: white;
                }
                
                .aone{
                    color: blueviolet;
                }
                .bone{
                    color: rgb(202, 6, 6);   
                }
                .cone{
                    color: green;
                }
                .done{
                    color: rgb(216, 202, 3);
                }
                .eone{
                    color: rgb(212, 6, 6);
                }
                .fone{
                    color: rgb(160, 15, 63);
                }
                .gone{
                    color: rgb(99, 99, 252);
                }
                .hone{
                    color: rgb(255, 238, 0);
                }
                .ione{
                    color: rgb(170, 170, 6);
                }
                
                .sideNav ul li:hover .aone,.sideNav ul li:hover .bone,.sideNav ul li:hover .cone,.sideNav ul li:hover .done,.sideNav ul li:hover .eone,.sideNav ul li:hover .fone,.sideNav ul li:hover .gone,.sideNav ul li:hover .hone,.sideNav ul li:hover .ione{
                    color: white;
                }
                .bsImg{
                    font-size: 24px;
                }
                .bsImgText{
                    font-size: 20px;
                }
            `}
        </style>
    )
}
const SideNav = () => {
  return (
    <div>
        <div className="sideNav">
            <div className="anchorone px-3 pt-3"><span className="bsImg"><BsIcon.BsCardImage/></span><span className="bsImgText ms-3">Laundry</span></div>
            <ul>
                <li className='py-2'>
                    <Link className="anchor" to="/">
                    <span className='me-3 aone'><BiIcon.BiHomeAlt/></span>Dashboard
                    </Link>
                </li>
                <li  className='py-2'>
                    <Link className="anchor" to="/">
                    <span className='me-3 bone'><BsIcon.BsFillTagFill/></span>Pos
                    </Link>
                </li>
                <li  className='py-2'>
                    <Link className="anchor" to="/">
                    <span className='me-3 cone'><BsIcon.BsFillBasket2Fill/></span>Orders
                    </Link>
                </li>
                <li  className='py-2'>
                    <Link className="anchor" to="/">
                    <span className='me-3 done'><AiIcon.AiOutlineBars/></span>Order Status   
                    </Link>
                </li>
                <li  className='py-2'>
                    <div className="anchor">
                        <span className='me-3 eone'><MdIcon.MdLibraryBooks/></span>
                        <select className="select" to="/"><option value="Tools">Expense</option></select>
                    </div>
                </li>
                <li  className='py-2'>
                    <Link className="anchor" to="/">
                    <span className='me-3 fone'><FaIcon.FaUserAlt/></span>Customers
                    </Link>
                </li>
                <li  className='py-2'>
                    <div className="anchor">
                    <span className='me-3 gone'><BsIcon.BsFillTagFill/></span>
                    <select className="select" to="/"><option value="Tools">Services</option></select>
                    </div>
                </li>
                 <li  className='py-2'>
                    <div className="anchor">
                    <span className='me-3 hone'><BsIcon.BsPatchQuestionFill/></span>
                    <select className="select" to="/"><option value="Tools">Reports</option></select>
                    </div>
                </li>
                <li  className='py-2'>
                    <div className="anchor">
                    <span className='me-3 ione'><AiIcon.AiOutlineSetting/></span>
                    <select className="select" to="/"><option value="Tools">Tools</option></select>
                    </div>
                </li>
                <li  className='py-2'>
                    <Link className="anchor" to="/">
                    <span className='me-3 jone'><MdIcon.MdPowerSettingsNew/></span>Logout
                    </Link>
                </li>
            </ul>
        </div>

        <SideStyle/>
    </div>
  )
}

export default SideNav