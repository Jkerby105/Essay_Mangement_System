import React from 'react'
// import './UserDashBoard.css'
import layoutImage from '../assets/writenext-high-resolution-logo-white-transparent.png'

export const UserDashBoard = () => {
  return (
    <div className="container">

<nav className="nav">
        <div className="logo">
            <div className="nav-img">
                <img src={layoutImage} alt="logo for WriteNext"></img>
            </div>
        </div>

        <input type="checkbox" id="check"></input>
        <label htmlFor="check" className="checkbtn">
            <i className="fa-solid fa-bars"></i> 
        </label>


        <ul className="a1">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Import</a></li>
            <li><a href="#">Logout</a></li>
          </ul>



    </nav>
    <main className="dashboard-container">

        <div className="folder">
        <div className="folder-top"></div>
            
            <div className="group-folder">
                <div>
                    <i className="fa-solid fa-folder"></i>
                </div>
                <div>
                    <i className="fa-solid fa-folder"></i>
                </div>
                <div>
                    <i className="fa-solid fa-folder"></i>
                </div>
                <div>
                    <i className="fa-solid fa-folder"></i>
                </div>
                <div>
                    <i className="fa-solid fa-folder"></i>
                </div>
                <div>
                    <i className="fa-solid fa-folder"></i>
                </div>
                <div>
                    <i className="fa-solid fa-folder"></i>
                </div>
                <div>
                    <i className="fa-solid fa-folder-plus"></i>
                </div>
            </div>

        </div>
       
    </main>

</div>
  )
}
