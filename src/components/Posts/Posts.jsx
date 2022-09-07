import React, { useState, useEffect } from "react";
import "./Posts.css";
import { client, urlFor } from "../../lib/client";

import Binary from "../../assets/Binary.gif";
import Learning from "../../assets/Lesson.gif";
import searching from "../../assets/looking.gif";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPost] = useState(null);


useEffect(() => {
  const query = '*[_type == "post"]';
  client.fetch(query).then((data) => {
    setPost(data.sort((p1, p2) => {
      return new Date(p2.releaseDate) - new Date(p1.releaseDate);
    }));
  });
}, [])

  return (
    <div className="post__main">
      <div className="div__main__group">
        <div className="post__group">
          <div className="post__gift__img">
            <img style={{ width: 160 }} src={Binary} alt="" />
          </div>

          <div className="post__gif__text">
            Master Your Area By Having Simplified Information!
          </div>
        </div>
        <div className="post__group2">
          <div className="post__gift__img2">
            <img style={{ width: 160 }} src={Learning} alt="" />
          </div>
          <div className="post__gif__text2">
            <p>
              Pass the Knowledge ahead and tech othes what you have learned.
            </p>
          </div>
        </div>
        <div className="post__group3">
          <div className="post__gift__img3">
            <img style={{ width: 160 }} src={searching} alt="" />
          </div>
          <div className="post__gif__text3">
            <p>
              Keep Yourself Uptaded About the Best Coding Practices and
              Technologies.
            </p>
          </div>
        </div>
      </div>
      <div className="post__main__div">
        <div className="text__up">
          <h1 className="text__heading">Latest Posts</h1>
        </div>

<div className="row">
        {posts?.map((post) => (
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
        ))}
</div>
      </div>
    </div>
  );
};

export default Posts;
