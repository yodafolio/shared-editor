import { useEffect } from 'react'
import xml2js from 'xml2js'


const TestXmlPage = () => {

    useEffect(() => {
        const parser = new xml2js.Parser({explicitArray: false})
        // parser.parseStringPromise
        const xml = `<root><name>test</name></root>`
        parser.parseStringPromise(xml)
            .then((res) => {
                console.log('res ---', res)
            })
            .catch((err) => {
                console.log('err ---', err)
            })
        
    }, [])


    return (
        <div>TestXmlPage</div>
    )
}

export default TestXmlPage