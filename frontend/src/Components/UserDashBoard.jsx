import React from 'react'
import classes from './UserDashBoard.module.css'
import layoutImage from '../assets/writenext-high-resolution-logo-white-transparent.png'

export const UserDashBoard = () => {
  return (
    <div className={classes.container}>

<nav className={classes.nav}>
        <div className={classes.logo}>
            <div className={classes['nav-img']}>
                <img src={layoutImage} alt="logo for WriteNext"></img>
            </div>
        </div>

        <input type="checkbox" id={classes.check}></input>
        <label htmlFor="check" className={classes.checkbtn}>
            <i className={`fa-solid fa-bars ${classes['fa-bars']}`}></i> 
        </label>


        <ul className={classes.a1}>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Import</a></li>
            <li><a href="#">Logout</a></li>
          </ul>



    </nav>
    <main className={classes['dashboard-container']}>

        <div className={classes.folder}>
        <div className={classes['folder-top']}></div>
            
            <div className={classes['group-folder']}>
                <div>
                <i className={`fa-solid fa-folder ${classes['fa-folder']}`}></i>
                </div>
                <div>
                <i className={`fa-solid fa-folder ${classes['fa-folder']}`}></i>
                </div>
                <div>
                <i className={`fa-solid fa-folder ${classes['fa-folder']}`}></i>
                </div>
                <div>
                <i className={`fa-solid fa-folder ${classes['fa-folder']}`}></i>
                </div>
                <div>
                <i className={`fa-solid fa-folder ${classes['fa-folder']}`}></i>
                </div>
                <div>
                <i className={`fa-solid fa-folder ${classes['fa-folder']}`}></i>
                </div>
                <div>
                <i className={`fa-solid fa-folder ${classes['fa-folder']}`}></i>
                </div>
                <div>
                    <i className={`fa-solid fa-folder-plus ${classes['fa-folder-plus']}`}></i>
                </div>
            </div>

        </div>
       
    </main>

</div>
  )
}
