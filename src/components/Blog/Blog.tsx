import React from 'react';
import './Blog.scss';
import Button from '../Button';
import generateImgPath from '../../utils/generateImgPath';

const POSTS = [
  {
    imgSrc: generateImgPath('/images/photographer.jpg'),
    title: 'Importance of light in photography',
    date: 'June 20, 2024',
    description: 'Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo'
  },
  {
    imgSrc: generateImgPath('/images/camera.jpg'),
    title: 'The tools you need for the perfection',
    date: 'June 25, 2024',
    description: 'Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo'
  },
  {
    imgSrc: generateImgPath('/images/girl-second.jpg'),
    title: 'Knowing the difference is important',
    date: 'August 22, 2024',
    description: 'Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo'
  },
];

const Blog = () => {
  return (
      <section className="section-blog">
        <div className="section-blog__inner">
          <div className="container section-blog__container">
            <div className="section-blog__content">
              <div className="section-blog__title-wrap">
                <div className="section-blog__title">
                  <div className="section-blog__title">
                    Latest from Blog
                  </div>
                  <div className="section-blog__subtitle">
                    Some of the latest posts from my personal blog
                  </div>
                </div>
              </div>
              <div className="section-blog__posts posts">
                <ul className="posts-list">
                  { POSTS.map((post) => (
                      <li className="posts-list__item"
                          key={ post.date }>
                        <div className="post">
                          <div className="post__inner">
                            <div className="post__part post-photo">
                              <div className="post-photo__inner">
                                <img src={ post.imgSrc }
                                     width={ 100 }
                                     height={ 100 }
                                     alt={ post.title }/>
                              </div>
                            </div>
                            <div className="post__part post-description">
                              <div className="post-description__title-wrap">
                                <div className="post-description__title">
                                  { post.title }
                                </div>
                                <div className="post-description__author">
                                  By <span>Emma Anderson - { post.date }</span>
                                </div>
                              </div>
                              <div className="post-description__text">
                                { post.description }
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                  )) }

                </ul>
              </div>

              <div className="section-blog__btn read-blog">
                <Button className="read-blog__btn"
                        title="Read more in the blog"/>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Blog;
