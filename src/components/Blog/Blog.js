import React from 'react';
import './Blog.scss';
import Photographer from '../../images/photographer.jpg';
import Photo from '../../images/photo.jpg';
import GirlSecond from '../../images/girl-second.jpg';
import Button from '../Button';

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
                  <div className="section-books__subtitle">
                    Some of the latest posts from my personal blog
                  </div>
                </div>
              </div>
              <div className="section-blog__posts posts">
                <ul className="posts-list">
                  <li className="posts-list__item">
                    <div className="post">
                      <div className="post__inner">
                        <div className="post__part post-photo">
                          <div className="post-photo__inner">
                            <img src={Photographer} alt="photographer"/>
                          </div>
                        </div>
                        <div className="post__part post-description">
                          <div className="post-description__title-wrap">
                            <div className="post-description__title">
                              Importance of light in photography
                            </div>
                            <div className="post-description__author">
                              By <span>Emma Anderson - June 20, 2018</span>
                            </div>
                          </div>
                          <div className="post-description__text">
                            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eius mod tempor
                            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            Risus commodo
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="posts-list__item">
                    <div className="post">
                      <div className="post__inner">
                        <div className="post__part post-photo">
                          <div className="post-photo__inner">
                            <img src={Photo} alt="photographer"/>
                          </div>
                        </div>
                        <div className="post__part post-description">
                          <div className="post-description__title-wrap">
                            <div className="post-description__title">
                              The tools you need for the perfection
                            </div>
                            <div className="post-description__author">
                              By <span>Emma Anderson - June 25, 2018</span>
                            </div>
                          </div>
                          <div className="post-description__text">
                            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eius mod tempor
                            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            Risus commodo
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="posts-list__item">
                    <div className="post">
                      <div className="post__inner">
                        <div className="post__part post-photo">
                          <div className="post-photo__inner">
                            <img src={GirlSecond} alt="photographer"/>
                          </div>
                        </div>
                        <div className="post__part post-description">
                          <div className="post-description__title-wrap">
                            <div className="post-description__title">
                              Knowing the difference is important
                            </div>
                            <div className="post-description__author">
                              By <span>Emma Anderson - August 22, 2018</span>
                            </div>
                          </div>
                          <div className="post-description__text">
                            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eius mod tempor
                            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            Risus commodo
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
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
  )
}

export default Blog;
