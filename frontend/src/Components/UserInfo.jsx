import React from 'react'
import imageLogo from '../assets/writenext-high-resolution-logo-white-transparent.png';
import classes from './UserInfo.module.css'

export const UserInfo = () => {
  return (
    <div className={classes.container}>
    <nav className={classes.nav}>
        <div className={classes['nav-img']}>
            <img src={imageLogo} alt="logo for WriteNext"></img>
        </div>
        <div className={classes['nav-link']}>
            <div>Profile</div>
            <div>Import</div>
            <div>Logout</div>
        </div>

    </nav>


    <main className={classes['content-holder']}>
        <div className={classes['content-holder-left']}>
            <div className={classes['content-holder-group']}>
                {/* <div>
                    <link className={classes['content-item']} rel="stylesheet" >Profile</link>
                </div>
                <div>
                    <link className={classes['content-item']} rel="stylesheet">Edit Profile</link>
                </div>
                <div>
                    <link className={classes['content-item']} rel="stylesheet">Project</link>
                </div>
                <div>
                    <link className={classes['content-item']} rel="stylesheet" >Edit Password</link>
                </div>
                <div>
                    <link className={classes['content-item']} rel="stylesheet">Logout</link>
                </div> */}
            </div>
            <hr className={classes.line}></hr>
            <div>
            <img src={imageLogo} alt="logo for WriteNext"></img>
            </div>
        </div>
         {/* Profile  */}
        <div className={classes['content-holder-right']}>
            <div className={classes['content-holder-right-inner']}>
                <div>
                    <i className={`${classes['fa-solid']} ${classes['fa-user']}`}></i>
                </div>
                <div>
                    <label htmlFor="name">User Name</label>
                    <input type="text" placeholder="Spike Spiegel" disabled></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="SpikeSpiegel904@gmail.com" disabled></input>
                </div>
                {/* <link rel="stylesheet" href="">w</link>
                <link rel="stylesheet" href="">w</link> */}
                <div className={classes['button-group']}>
                    <button>Confirm</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
         {/* Profile  */}
    </main>


</div>
  )
}
