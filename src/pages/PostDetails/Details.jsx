import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { client, urlFor } from '../../lib/client'
import './Details.css'

const Details = () => {
const [posts, setPost] = useState()
const {slug} = useParams();


useEffect(() => {
  const query = `*[slug.current == "${slug}"]`;
  client.fetch(query).then((data) => {
    setPost(data[0]);
  });
}, [slug])

console.log(posts)

if(!posts) return  <div className='loading lds-hourglass'></div> 


  return (    
    <div className='details__main'>
     <div className='details__title'>
      <h1 className='details__heading'>{posts.title}</h1>
     </div>
     <div className='details__img'>
       <img className='details__image' src={urlFor(posts.imgUrl)} alt="" />
     </div>
     <div className='details__tag'>
      <p className='details__tag tag-blue'>{posts.tag}</p>
     </div>
     <div className='details__desc'>
      <h2>
      {posts.details} 
      </h2>
     </div>
    </div>
  )
}

export default Details