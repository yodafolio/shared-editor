import dynamic from "next/dynamic";


const ReactQuill = dynamic(() => import("./ReactQuill"), {    
    ssr: false,
    loading: () => <p>Loading...</p>
})

// const ReactQuill = dynamic(async () => {
//     const { default: RQ } = await import("./ReactQuill")
//     return function forwardRef({forwardRef, ...props}) {
//         return <RQ Ref={forwardRef} {...props} />
//     }
// }, {    
//     ssr: false,
//     loading: () => <p>Loading...</p>
// })

export default ReactQuill