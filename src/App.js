import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import SectionOne from './component/SectionOne';
import SideNav from './component/SideNav';
const App = () => {
  return (
    <div>
      <BrowserRouter>
			<div className="section-one">
			</div>
			<div className="app-nav"><Navbar/></div>
			<div className="section-tt">
				<div className='appa'><SideNav/></div>
				<div className="appb">
				<SectionOne/>
				
				</div>
			</div>
      </BrowserRouter>
    </div>
  )
}
export default App