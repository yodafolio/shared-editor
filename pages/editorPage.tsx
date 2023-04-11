import dynamic from 'next/dynamic'

import { useState , useRef, useEffect , useCallback } from "react"
import Editor from "../components/editor/ReactQuillWrapper"
import 'react-quill/dist/quill.snow.css'
import hljs from 'highlight.js';
import "highlight.js/styles/github.css";

import * as Y from 'yjs'
import { WebrtcProvider } from "y-webrtc"
import { IndexeddbPersistence } from 'y-indexeddb'
import { QuillBinding } from 'y-quill'

hljs.configure({
    languages: ['javascript', 'ruby', 'python', 'java', 'cpp', 'kotlin', 'sql']
});

const modulesRef = {
    // cursors: true,
    syntax: {
        highlight: (text: string) => hljs.highlightAuto(text).value,
      },
    cursors: {
        transformOnTextChange: true,
    },
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image", "code-block"],
      ["clean"]
    ],
    history: {
        userOnly: true,
    },
  };

const log = console.log

const EditorPage = () => {
    const [refState, setRefState] = useState<any>(null)
    const [quill, setQuill] = useState(null)

    useEffect(() => {
        if(refState !== null) {
            const editor = refState.current.getEditor()
            setQuill(editor)
        }
    }, [refState])
    
    useEffect(() => {
        if(quill) {
            //ydoc = Yjs 문서는 공유데이터 보유
            const ydoc = new Y.Doc()

            const roomName = "collab-demo-room"

            const provider = new WebrtcProvider(roomName, ydoc);
            const persistence = new IndexeddbPersistence(roomName, ydoc)
            // 모든 네트워크 공급자는 인식 crdt를 구현합니다.
            const awareness = provider.awareness
            //문서에 공유 텍스트 유형을 정의
            const ytext = ydoc.getText('quill')

            persistence.once('synced', (e: IndexeddbPersistence) => { console.log('initial content loaded', e) })

            awareness.on('change', (chages: any) => {
                log('1 =>', chages)
                log('Change =', Array.from(awareness.getStates().values()) )
            })
            
            awareness.setLocalStateField('user', {
                // Define a print name that should be displayed
                name: 'Emmanuelle',
                // Define a color that should be associated to the user:
                color: '#ffb61e' // should be a hex color
            })
            const binding = new QuillBinding(ytext, quill, awareness)
        }
    }, [quill])
    

    return (
        <>
            <div>quill page</div>
            <Editor setRefState={setRefState} modules={modulesRef} />
        </>
    )
}

export default EditorPage