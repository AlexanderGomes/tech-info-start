import React from 'react'
import { Hero, Post } from '../../components'


const Home = () => {
  return (
<div className="app__main">
<div className="app__hero">
  <Hero />
</div>
<div className="app__post__main">
  <Post />
</div>
</div> 
  )
}

export default Home