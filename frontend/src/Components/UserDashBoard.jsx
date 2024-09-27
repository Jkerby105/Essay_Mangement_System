import React from 'react'
import classes from './UserDashBoard.module.css'
import logoImage from '../assets/writenext-high-resolution-logo-white-transparent.png'

export const UserDashBoard = () => {
  return (
    <div className={classes.container}>


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
