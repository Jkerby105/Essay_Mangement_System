import React, { useImperativeHandle } from "react";
import { forwardRef, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { NavLink } from "react-router-dom";

const Modal = forwardRef(({ onReset, cancel, removeEssay }, ref) => {
  const dialog = useRef();
  console.log(cancel);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  function essayDelete(){
    removeEssay();
  }

  return createPortal(
    <dialog ref={dialog} className={classes["result-modal"]}>
      {cancel ? (
        <div>
          <p>
            Are you positive you want to <strong>Cancel</strong>
          </p>
          <form method="dialog" onSubmit={onReset}>
            <NavLink to="/dashBoard">
              <button>Yes</button>
            </NavLink>
            <button>No</button>
          </form>
        </div>
      ) : (
        <div>
          <p>
            Are you sure you want to <strong> DELETE </strong>this essay.
          </p>
          <form method="dialog" onSubmit={onReset}>
          <button onClick={removeEssay}>Yes</button>
            <button>No</button>
          </form>
        </div>
      )}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
