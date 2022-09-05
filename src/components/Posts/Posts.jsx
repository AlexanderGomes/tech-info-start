import React from 'react'
import './Posts.css'

import Binary from '../../assets/Binary.gif' //check
import Learning from '../../assets/Lesson.gif'
import searching from '../../assets/looking.gif'



const Posts = () => {
  return (
    <div className='post__main'>
    <div className='div__main__group'>
    <div className='post__group'>
      <div className='post__gift__img'>
        <img style={{width: 160}} src={Binary} alt="" />
      </div>
      <div className='post__gif__text'>
       Master Your Area By Having Simplified Information!
      </div>
    </div>
    <div className='post__group2'>
      <div className='post__gift__img2'>
       <img style={{width: 160}} src={Learning} alt="" />
      </div>
      <div className='post__gif__text2'>
        <p>Pass the Knowledge ahead and tech othes what you have learned.</p>
      </div>
    </div>
    <div className='post__group3'>
      <div className='post__gift__img3'>
       <img style={{width: 160}} src={searching} alt="" />
      </div>
      <div className='post__gif__text3'>
      <p>Keep Yourself Uptaded About the Best Coding Practices and Technologies.</p>
      </div>
    </div>
    </div>
 <div className='post__main__div'>
    <div className='text__up'>
     <h1 className='text__heading'>Latest Posts</h1>
    </div>
    <div class="container">
  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-blue">Technology</span>
      <h4>What's new in 2022 Tech</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
          <small>2h ago</small>
      </div>
    </div>
      <button className='post__btn'>Read Post</button>
  </div>

  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-blue">Technology</span>
      <h4>What's new in 2022 Tech</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
          <small>2h ago</small>
      </div>
    </div>
      <button className='post__btn'>Read Post</button>
  </div>

  <div class="card">
    <div class="card__header">
      <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-blue">Technology</span>
      <h4>What's new in 2022 Tech</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div class="card__footer">
      <div class="user">
          <small>2h ago</small>
      </div>
    </div>
      <button className='post__btn'>Read Post</button>
  </div>
  </div>
  </div>

    </div>
  )
}

export default Posts