import React,{useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {EditorState,ContentState ,convertToRaw,convertFromHTML} from 'draft-js'
import draftToHtml from 'draftjs-to-html';

var overview = "<ul><p><strong>asascas</strong></p>";

    const contentDataState = ContentState.createFromBlockArray(convertFromHTML(overview));
    const editorDataState = EditorState.createWithContent(contentDataState);
    let editedText;
const TextEditor = () => {
    const [editorState,setEditorState]=useState(editorDataState)
   
    
   
    let onEditorStateChange=(editorState)=>{
        console.log(editorState)
        setEditorState(editorState)
        editedText=draftToHtml(convertToRaw(editorState.getCurrentContent()))
    }
   
   
  return (
    <div  style={{width:'50%',margin:'0 auto'}}>
    <Editor
     toolbar={{
        options: ["inline", "list"],
        inline: {
          options: ["bold", "italic", "underline"],
        },
        list: {
          options: ["unordered", "ordered"],
        },
      }}
    editorState={editorState}
    wrapperClassName="input-wrapper-area"
    toolbarClassName="input-toolbar-area"
    editorClassName="input-editor-area"
    onEditorStateChange={onEditorStateChange}
  />
  <div>{draftToHtml(convertToRaw(editorState.getCurrentContent()))}</div>
  </div>
  )
}

export default TextEditor