import React, {useState, useEffect} from 'react'
import './PostMain.css'
import { client, urlFor } from "../../lib/client";
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const PostMain = () => {
const [posts, setPosts] = useState(null)
const [search, setSearch] = useState("")


  useEffect(() => {
    const query = '*[_type == "post"]';
    client.fetch(query).then((data) => {
      setPosts(data.sort((p1, p2) => {
        return new Date(p2.releaseDate) - new Date(p1.releaseDate);
      }));
    });

  }, [setPosts])

 
  

  return (
    <div className='postMain__div'>
     <div className='postMain__search'>
     <div className="wrap">
   <div className="search">
      <input type="text" className="searchTerm" placeholder="Search By Tag..." onChange={(event) => setSearch(event.target.value)}/>
      <button type="submit" className="searchButton">
     <AiOutlineSearch />
     </button>
   </div>
</div>
     </div>

     <div className='postMain__post'>

      {posts?.filter((val) => {
        if(search == '') {
          return val
        } else if(val.tag.toLowerCase().includes(search.toLocaleLowerCase())) {
          return val
        } 
      }).map((post) => (
        <div className='post__main' key={post._id}>
        <Link to={'/post/' + post.slug.current} style={{textDecoration: 'none', color: 'black'}}>
          <div class="container" key={post._id}>
          <div class="card">
            <div class="card__header">
              <img
                src={urlFor(post.imgUrl)}
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div class="card__body">
              <span class="tag tag-blue">{post.tag}</span>
              <h4>{post.title}</h4>
              <p>
              {post.details.slice(0,60)}
              </p>
            </div>
            <div class="card__footer">
              <div class="user">
                <small>{post.releaseDate}</small>
              </div>
            </div>
            <button className="post__btn">Read Post</button>
          </div>
        </div>
          </Link>
        </div>
      ))}
     </div>
    </div>
  )
}

export default PostMain