import React, {useImperativeHandle} from "react";
import { forwardRef,useRef } from "react";
import {createPortal} from 'react-dom';
import classes from "./Modal.module.css";
import { NavLink } from "react-router-dom";

const Modal = forwardRef(({onReset},ref) => {
    const dialog = useRef();


    useImperativeHandle(ref, () => {
        return {
          open() {
            dialog.current.showModal();
          },
        };
      });

    return createPortal(
        <dialog ref={dialog} className={classes["result-modal"]}>
          <p>
            Are you positive you want to <strong> Cancel</strong>
          </p>
          <form method="dialog" onSubmit={onReset}>
            <NavLink to="/dashBoard">
            <button>Yes</button>
            </NavLink>
            <button>No</button>
          </form>
        </dialog>,
            document.getElementById('modal')
      );
})


export default Modal