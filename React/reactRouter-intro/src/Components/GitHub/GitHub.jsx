import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://api.github.com/users/patelmuqarrab")
        .then(response=> response.json())
        .then(data => {
            setData(data)
        })
    }, [])

  return (
    <div className='text m-4 bg-gray-600 text-white p-6 text-3xl'>
    Name: {data.name}
    <br />
    <br />
    <p>{data.bio}</p>
    <img className='' src={data.avatar_url} alt="Git picture" width={400} />
    </div>
  )
}

export default GitHub

