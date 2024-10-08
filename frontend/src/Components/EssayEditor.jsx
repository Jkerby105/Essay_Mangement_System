import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import logo from "../assets/writenext-high-resolution-logo-black-transparent.png";
import classes from "./EssayEditor.module.css";
import { useSubmit } from 'react-router-dom';

const apiKey = import.meta.env.VITE_ACCESS_KEY;

export default function EssayEditor() {
  const [title, setTitle] = useState('No Title');  
  const [disable, setDisable] = useState(false);  

  const editorRef = useRef(null);
  const submit = useSubmit();

  const log = () => {
    if (editorRef.current) {
      const currentEssayContent = editorRef.current.getContent();
      const formData = new FormData();
      formData.append("essayValue", currentEssayContent);
      formData.append("title", title); 
      submit(formData, { method: "POST" });
    }
  };

  function saveInput(e) {
    e.preventDefault();  
    setDisable(true);
  }

  function enableEditing(e) {
    e.preventDefault(); 
    setDisable(false);
  }

  return (
    <>
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
            <div className={classes.buttonGroup}>
              <button onClick={saveInput} className={classes['button-86']}>Save</button>
              <button onClick={enableEditing} className={classes['button-86']}>Edit</button>
            </div>
          </div>
        </form>
        <img src={logo} alt="logo for WriteNext" />
      </div>
      
      <div className={classes["editor-container"]}>  {/* Wrap the editor */}
        <Editor
          apiKey={apiKey}
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 700,
            width: 1700,  // Adjust the width of the editor here
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
          }}
        />
      </div>
      
      <div className={classes['button-container']} >
        <button onClick={log} className={classes['button-87']}>Save Essay</button>
        <button className={classes['button-87']}>Cancel</button>
      </div>
    </>
  );
}
