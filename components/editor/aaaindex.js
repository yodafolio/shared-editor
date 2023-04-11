import {useState , useRef, useEffect , useCallback} from "react"
import ReactQuill from "./ReactQuillWrapper"
import 'react-quill/dist/quill.snow.css'
import dynamic from "next/dynamic"
// const ReactQuill = dynamic(() => import('./ReactQuillWrapper'), {ssr:false})

const Editor = () => {
    let quillRef = useRef(null)

    let ReactQuillRef = useCallback(editor => {
        editor?.editor?.format('direction', 'rtl');
        editor?.editor?.format('align', 'right');
    }, [])

    useEffect(() => {
        console.log('quillRef ---', quillRef)
    }, [quillRef])

    return (
        <ReactQuill Ref={quillRef} />
    )
}

export default Editor