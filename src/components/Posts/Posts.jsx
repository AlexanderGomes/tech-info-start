import React, { useState, useEffect } from "react";
import "./Posts.css";
import { client, urlFor } from "../../lib/client";

import Binary from "../../assets/Binary.gif";
import Learning from "../../assets/Lesson.gif";
import searching from "../../assets/looking.gif";
import { Link } from "react-router-dom";

const Posts = () => {
  const [post, setPosts] = useState(null);
  const [posts, setPost] = useState(null);
  const [mern, setMern] = useState(null);
  const [visible, setVisible] = useState(3);
  const [visibleSecond, setVisibleSecond] = useState(3);
  const [visibleThird, setVisibleThird] = useState(3);

  useEffect(() => {
    const query = '*[_type == "post"]';
    client.fetch(query).then((data) => {
      setPost(
        data.sort((p1, p2) => {
          return new Date(p2.releaseDate) - new Date(p1.releaseDate);
        })
      );
    });
  }, []);

  useEffect(() => {
    const query = '*[tag == "techs"]';
    client.fetch(query).then((data) => {
      setPosts(
        data.sort((p1, p2) => {
          return new Date(p2.releaseDate) - new Date(p1.releaseDate);
        })
      );
    });
  }, []);

  console.log(post)
  useEffect(() => {
    const query = '*[tag == "tech"]';
    client.fetch(query).then((data) => {
      setMern(
        data.sort((p1, p2) => {
          return new Date(p2.releaseDate) - new Date(p1.releaseDate);
        })
      );
    });
  }, []);

  const showMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const showMoreSecond = () => {
    setVisibleSecond((prevValue) => prevValue + 3);
  };

  const showMoreThird = () => {
    setVisibleThird((prevValue) => prevValue + 3);
  };

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
          {posts?.slice(0, visible).map((post) => (
            <Link
              to={"/post/" + post.slug.current}
              style={{ textDecoration: "none", color: "black" }}
            >
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
                    <p>{post.details.slice(0, 60)}</p>
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
      <div className="btn__div">
        <button className="button-86" role="button" onClick={() => showMore()}>
          See More
        </button>
      </div>

      <div className="post__main__div">
        <div className="text__up move__text">
          <h1 className="text__heading">Node.js</h1>
        </div>
        <div className="row move__row">
          {post?.slice(0, visibleSecond).map((p) => (
            <div>
              <Link
                to={"/post/" + p.slug.current}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div class="container" key={p._id}>
                  <div class="card">
                    <div class="card__header">
                      <img
                        src={urlFor(p.imgUrl)}
                        alt="card__image"
                        class="card__image"
                        width="600"
                      />
                    </div>
                    <div class="card__body">
                      <span class="tag tag-blue">{p.tag}</span>
                      <h4>{p.title}</h4>
                      <p>{p.details.slice(0, 60)}</p>
                    </div>
                    <div class="card__footer">
                      <div class="user">
                        <small>{p.releaseDate}</small>
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
      <div className="btn__div">
        <button
          className="button-86"
          role="button"
          onClick={() => showMoreSecond()}
        >
          See More
        </button>
      </div>

      <div className="post__main__div">
        <div className="text__up move__text">
          <h1 className="text__heading">MERN</h1>
        </div>
        <div className="row move__row">
          {mern?.slice(0, visibleThird).map((m) => (
            <div>
              <Link
                to={"/post/" + m.slug.current}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div class="container" key={m._id}>
                  <div class="card">
                    <div class="card__header">
                      <img
                        src={urlFor(m.imgUrl)}
                        alt="card__image"
                        class="card__image"
                        width="600"
                      />
                    </div>
                    <div class="card__body">
                      <span class="tag tag-blue">{m.tag}</span>
                      <h4>{m.title}</h4>
                      <p>{m.details.slice(0, 60)}</p>
                    </div>
                    <div class="card__footer">
                      <div class="user">
                        <small>{m.releaseDate}</small>
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
      <div className="btn__div">
        <button
          className="button-86"
          role="button"
          onClick={() => showMoreThird()}
        >
          See More
        </button>
      </div>
<div className="move__form">
<div className="contact__form" id="contact">
       <div className="form__text">
        <div className="form__title">
        <h1 className="form__title__h1">Contact Us</h1>
        </div>
        <div className="form__desc">
          <div className="form__p">
            <p className="pr">Personal Consultation, Let's Have a Talk and Discuss What You Need, We Don't Initially Put a Price Because a Lot of Things are free, and Don't Take That Much Time. Send a Message or Email Deeply Explaning What You Need.</p>
          </div>
          <div className="form__information">
           <p>Email: <a href="mailto:techinfostarcontact@gmail.com" className="form__mail" target={'_blank'}>techinfostarcontact@gmail.com</a></p>
           <p>Phone:  <a href="tel:(510)630-5188" className="form__phone">(510)630-5188</a></p>
          </div>
        </div>
       </div>
      </div>
</div>
    </div>
  );
};

export default Posts;
