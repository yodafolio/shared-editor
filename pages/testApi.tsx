import axios from 'axios'
import { useEffect, useCallback } from 'react'
// import xml2js from 'xml2js'

const serviceKey = 'sGK3JAB83%2BQurd%2B5CPdFquuCJaaqWfLPPSDfR8wtGMUAvIfHV%2FW7EdbEmkPMcQ35V0qVmhlUxocB9JEKxvnUww%3D%3D'
// const serviceKey = 'sGK3JAB83+Qurd+5CPdFquuCJaaqWfLPPSDfR8wtGMUAvIfHV/W7EdbEmkPMcQ35V0qVmhlUxocB9JEKxvnUww=='

// axios.defaults.url = 'http://apis.data.go.kr/1192000/SicsVsslManp2'

const TestApi = () => {

    

    // useEffect(() => {
    //     axios.get('api/testApi')
    //         .then((res) => {
    //             console.log('res', res)
    //         })
    // })

    const getData = useCallback( async () => {
        try {
            const params = {
                serviceKey,
                numOfRows: 100,
            }
            // const res = await axios.get(`http://apis.data.go.kr/1192000/SicsVsslManp2/Info?serviceKey=sGK3JAB83%2BQurd%2B5CPdFquuCJaaqWfLPPSDfR8wtGMUAvIfHV%2FW7EdbEmkPMcQ35V0qVmhlUxocB9JEKxvnUww%3D%3D`)
            const res = await axios.get(`http://apis.data.go.kr/1192000/SicsVsslManp2/Info?serviceKey=sGK3JAB83%2BQurd%2B5CPdFquuCJaaqWfLPPSDfR8wtGMUAvIfHV%2FW7EdbEmkPMcQ35V0qVmhlUxocB9JEKxvnUww%3D%3D&numOfRows=100`)
            // const res = await axios.get(`http://apis.data.go.kr/1192000/SicsVsslManp2/Info`, { params })
            console.log('res!!!', res.data)
        } catch (error) {
            console.log('err-->', error)
        }
    }, [])

    useEffect(() => {
        getData()
        // const parser = new xml2js.Parser({explicitArray: false})
        // 
        // axios.get(`http://apis.data.go.kr/1192000/SicsVsslManp2/Info?serviceKey=sGK3JAB83%2BQurd%2B5CPdFquuCJaaqWfLPPSDfR8wtGMUAvIfHV%2FW7EdbEmkPMcQ35V0qVmhlUxocB9JEKxvnUww%3D%3D`)
        // axios.get(`http://apis.data.go.kr/1192000/SicsVsslManp2/Info`, { params })
        //     .then((res) => {
        //         console.log('res ---', res.data.body)
        //     })
        //     .catch((err) => {
        //         console.log('err -----', err)
        //     })
    }, [getData])

    // useEffect(() => {
    //     var xhr = new XMLHttpRequest();
    //     var url = 'http://apis.data.go.kr/1192000/SicsVsslManp2/Info'; /*URL*/
    //     var queryParams = '?' + encodeURIComponent('serviceKey') + '='+serviceKey; /*Service Key*/
    //     // queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    //     // queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
    //     // queryParams += '&' + encodeURIComponent('vsslNm') + '=' + encodeURIComponent('양'); /**/
    //     // queryParams += '&' + encodeURIComponent('clsgn') + '=' + encodeURIComponent('DTBH'); /**/
    //     xhr.open('GET', url + queryParams);
    //     xhr.onreadystatechange = function () {
    //         if (this.readyState == 4) {
    //             console.log('1 =', this.status)
    //             console.log('2 =', this.getAllResponseHeaders())
    //             console.log('3 =', this.responseText)
    //             alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    //         }
    //     };

    //     xhr.send('');
    // }, [])

    return (
        <div>testApi</div>
    )
}

export default TestApi

// 요청 URL: http://apis.data.go.kr/1192000/SicsVsslManp2/Info?serviceKey=sGK3JAB83+Qurd+5CPdFquuCJaaqWfLPPSDfR8wtGMUAvIfHV/W7EdbEmkPMcQ35V0qVmhlUxocB9JEKxvnUww==
// 요청 메서드: GET
// 상태 코드: 200 OK
// 원격 주소: 27.101.215.194:80
// 리퍼러 정책: strict-origin-when-cross-origin

// HTTP/1.1 200 OK
// Access-Control-Allow-Origin: *
// Content-Type: text/xml;charset=UTF-8
// Content-Length: 229
// Date: Wed, 22 Mar 2023 04:47:20 GMT
// Server: NIA API Server

// GET /1192000/SicsVsslManp2/Info?serviceKey=sGK3JAB83+Qurd+5CPdFquuCJaaqWfLPPSDfR8wtGMUAvIfHV/W7EdbEmkPMcQ35V0qVmhlUxocB9JEKxvnUww== HTTP/1.1
// Accept: */*
// Accept-Encoding: gzip, deflate
// Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
// Connection: keep-alive
// Host: apis.data.go.kr
// Origin: http://localhost:3037
// Referer: http://localhost:3037/
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36

// ======================================

// 요청 URL: http://apis.data.go.kr/1192000/SicsVsslManp2/info?serviceKey=sGK3JAB83+Qurd+5CPdFquuCJaaqWfLPPSDfR8wtGMUAvIfHV/W7EdbEmkPMcQ35V0qVmhlUxocB9JEKxvnUww==
// 요청 메서드: GET
// 상태 코드: 500 Internal Server Error
// 리퍼러 정책: strict-origin-when-cross-origin

// HTTP/1.1 500 Internal Server Error
// Content-Type: text/xml;charset=utf-8
// Content-Length: 789
// Date: Wed, 22 Mar 2023 04:45:38 GMT
// Connection: close
// Server: NIA API Server

// GET /1192000/SicsVsslManp2/info?serviceKey=sGK3JAB83+Qurd+5CPdFquuCJaaqWfLPPSDfR8wtGMUAvIfHV/W7EdbEmkPMcQ35V0qVmhlUxocB9JEKxvnUww== HTTP/1.1
// Accept: */*
// Accept-Encoding: gzip, deflate
// Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
// Cache-Control: no-cache
// Connection: keep-alive
// Host: apis.data.go.kr
// Origin: http://localhost:3037
// Pragma: no-cache
// Referer: http://localhost:3037/
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36