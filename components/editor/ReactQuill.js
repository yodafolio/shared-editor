import ReactQuill from "react-quill";
import { useRef, useEffect, RefObject } from "react";
import QuillCursors from 'quill-cursors'

ReactQuill.Quill.register('modules/cursors', QuillCursors)

/**
 * 
 * @param {*} param
 * @returns 
 * @link https://github.com/vasturiano/react-force-graph/issues/324
 */
const ReactQuillEditor = ({formats, theme, modules , placeHolder, setRefState}) => {
    const quillRef = useRef(null)
    useEffect(() => setRefState( quillRef !== null ? quillRef : null ), [quillRef, setRefState])

    return <ReactQuill ref={quillRef} formats={formats} theme={theme} modules={modules} placeholder={placeHolder} />
    
}

export default ReactQuillEditor