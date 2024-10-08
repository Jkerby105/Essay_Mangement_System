import React from 'react'
import imageLogo from '../assets/writenext-high-resolution-logo-white-transparent.png';
import classes from './UserInfo.module.css'
import { Link } from 'react-router-dom';

export const UserInfo = () => {
  return (
    <div className={classes.container}>

    <main className={classes['content-holder']}>
        <div className={classes['content-holder-left']}>
            <div className={classes['content-holder-group']}>
            
                <div>
                    <Link className={classes['content-holder-left']} to={"/"} >Profile</Link>
                </div>
                <div>
                    <Link className={classes['content-holder-left']} to={"/"}>Project</Link>
                </div>
                <div>
                    <Link className={classes['content-holder-left']} to={"/"}>Logout/Dashboard</Link>
                </div>
            </div>
            <hr className={classes.line}></hr>
            <div>
            <img src={imageLogo} className={classes.imgContain} alt="logo for WriteNext"></img>
            </div>
        </div>
         {/* Profile  */}
        {/* <div className={classes['content-holder-right']}>
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
                <div className={classes['button-group']}>
                    <button>Confirm</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div> */}

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
