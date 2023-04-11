// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
}

const serviceKey = 'sGK3JAB83%2BQurd%2B5CPdFquuCJaaqWfLPPSDfR8wtGMUAvIfHV%2FW7EdbEmkPMcQ35V0qVmhlUxocB9JEKxvnUww%3D%3D'
axios.defaults.url = 'http://apis.data.go.kr/1192000/SicsVsslManp2'

export default function testHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const params = {
      serviceKey
  }
  console.log('test0-0000000')
  axios.get('http://apis.data.go.kr/1192000/SicsVsslManp2/info', {params})
    .then((res) => {
        console.log('res ---', res)
    })
  
  res.status(200).json({ name: 'John Doe!!' })
}
