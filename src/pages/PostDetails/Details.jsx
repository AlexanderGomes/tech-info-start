import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { client, urlFor } from '../../lib/client'
import './Details.css'

const Details = () => {
const [posts, setPost] = useState(null)
const {slug} = useParams();


useEffect(() => {
  const query = `*[slug.current == "${slug}"]`;
  client.fetch(query).then((data) => {
    setPost(data[0]);
  });
}, [])

console.log(posts)

  return (    
    <div className='details__main'>
     
    </div>
  )
}

export default Details