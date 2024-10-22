import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import logo from "../assets/writenext-high-resolution-logo-black-transparent.png";
import classes from "./EssayEditor.module.css";
import { useSubmit } from "react-router-dom";
import Modal from "./Modal";

const apiKey = import.meta.env.VITE_ACCESS_KEY;

export default function EssayEditor(prop) {
  const dialog = useRef();

  let userEssay = prop.essayInput;
  let tempTitle = null;

  const [title, setTitle] = useState(prop?.essayInput?.title || "No Title");

  const [disable, setDisable] = useState(false);
  const editorRef = useRef(null);
  const [cancel,setCancel] = useState(prop.creation);
  const submit = useSubmit();

  const log = (value) => {
    const formData = new FormData();

    if (editorRef.current) {
      const currentEssayContent = editorRef.current.getContent();
      formData.append("essayValue", currentEssayContent);
      formData.append("title", title);
      if (!prop.creation) {
        formData.append("update", "true");
        formData.append("essayID", prop.essayID);
      }
      submit(formData, { method: "POST" });
    }
  };

  function deleteEssay(){
    console.log("hello")
    const formData = new FormData();
    formData.append("delete", "delete");
    formData.append("essayID", prop.essayID);
    submit(formData, { method: "POST" });
  }

  function saveInput(e) {
    e.preventDefault();
    setDisable(true);
  }

  function enableEditing(e) {
    e.preventDefault();
    setDisable(false);
  }

  function handleCancel() {
    dialog.current.open();
  }

  return (
    <>
      <Modal ref={dialog} cancel={cancel} removeEssay={deleteEssay}/>

      <div className={classes["nav-img"]}>
        <form>
          <div className={classes.title}>
            <div className={classes.inputHolder}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                disabled={disable}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {prop.creation ? (
              <div className={classes.buttonGroup}>
                <button onClick={saveInput} className={classes["button-86"]}>
                  Save
                </button>
                <button
                  onClick={enableEditing}
                  className={classes["button-86"]}
                >
                  Edit
                </button>
              </div>
            ) : (
              <div className={classes.buttonGroup}>
                <button onClick={saveInput} className={classes["button-86"]}>
                  Edit
                </button>
              </div>
            )}
          </div>
        </form>
        {!prop.creation ? (
          <button onClick={handleCancel} className={classes.delete}>
            Delete
          </button>
        ) : (
          ""
        )}
      </div>

      <div className={classes["editor-container"]}>
        {" "}
        {/* Wrap the editor */}
        <Editor
          apiKey={apiKey}
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue={
            userEssay
              ? userEssay.draft
              : "<p>This is the initial content of the editor.</p>"
          }
          // initialValue="<p>This is the initial content of the editor.</p>"

          init={{
            height: 700,
            width: 1700, // Adjust the width of the editor here
            plugins:
              "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
          }}
        />
      </div>

      <div className={classes["button-container"]}>
        {prop.creation ? (
          <button
            onClick={log}
            className={classes["button-87"]}
            disabled={!disable}
          >
            Save Essay
          </button>
        ) : (
          <button onClick={log} className={classes["button-87"]}>
            Save Essay
          </button>
        )}

        <button onClick={handleCancel} className={classes["button-87"]}>
          Cancel
        </button>
      </div>
    </>
  );
}
