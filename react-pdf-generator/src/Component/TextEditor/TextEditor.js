import React, { useState, useEffect } from 'react'
import './TextEditor.css'

import { Editor } from 'react-draft-wysiwyg'
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState
} from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import draftjsToHtml from 'draftjs-to-html'

const TextEditor2 = ({
  setFormatedNotes,
  defaultValue,
  placeholder
}) => {
  const overview = defaultValue || ''
  const contentDataState = ContentState.createFromBlockArray(
    convertFromHTML(overview)
  )
  const editorDataState = EditorState.createWithContent(
    contentDataState
  )
  const [editorState, setEditorState] = useState(
    defaultValue ? editorDataState : EditorState.createEmpty()
  )

  const onEditorStateChange = editorState => {
    setEditorState(editorState)
  }
  const text = () => {
    const valueStyled = `${draftjsToHtml(
      convertToRaw(editorState.getCurrentContent())
    )}`
    setFormatedNotes(valueStyled)
  }
  useEffect(() => {
    text()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorState])
  return (
    <>
      <div className="textEditor">
        <Editor
          toolbar={{
            options: ['inline', 'list'],
            inline: {
              options: ['bold', 'italic', 'underline']
            },
            list: {
              options: ['unordered', 'ordered']
            }
          }}
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          placeholder={placeholder || 'notes'}
        />
      </div>
    </>
  )
}
export default TextEditor2
