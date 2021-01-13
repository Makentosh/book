import React from 'react';
import './Footer.scss';
import FooterLogo from '../../images/footer-logo.png';
import {FacebookIcon, SlackIcon, TweeterIcon, TwitchIcon, ViberIcon, YoutubeIcon} from '../../images';

const Footer = ({...props}) => {
  return (
      <footer className="footer">
        <div className="footer__inner">
          <div className="container footer__container">
            <div className="footer__content">
              <ul className="footer-nav">
                <li className="footer-nav__item">
                  <div className="footer-description">
                    <div className="footer-description__part footer-logo">
                      <div className="footer-logo__inner">
                        <img src={FooterLogo} alt="Bukee"/>
                      </div>
                    </div>
                    <div className="footer-description__part footer-text">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="footer-description__part footer-copyright">
                      &#169; 2020 Bukee Private Limited.
                    </div>
                  </div>
                </li>
                <li className="footer-nav__item">
                  <div className="footer-links">
                    <div className="footer-links__title-wrap">
                      <div className="footer-links__title">
                        Useful Links
                      </div>
                    </div>
                    <ul className="footer-links-list">
                      <li className="footer-links-list__item">
                        <a href="/" className="footer-links-list__link">
                          About Bukee
                        </a>
                      </li>
                      <li className="footer-links-list__item">
                        <a href="/" className="footer-links-list__link">
                          Explore Our Ecosystem
                        </a>
                      </li>
                      <li className="footer-links-list__item">
                        <a href="/" className="footer-links-list__link">
                          Monthly Community Meetup
                        </a>
                      </li>
                      <li className="footer-links-list__item">
                        <a href="/" className="footer-links-list__link">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="footer-nav__item">
                  <div className="footer-contacts">
                    <div className="footer-contacts__title-wrap">
                      <div className="footer-contacts__title">
                        Our Contacts
                      </div>
                    </div>
                    <ul className="footer-contacts-list">
                      <li className="footer-contacts-list__item">
                        <a href="/" className="footer-contacts-list__link">
                          Amphitheatre Parkway, CA, 94043
                        </a>
                      </li>
                      <li className="footer-contacts-list__item">
                        <a href="tel:+4455663322" className="footer-contacts-list__link">
                          Call us on: +4455663322
                        </a>
                      </li>
                      <li className="footer-contacts-list__item">
                        <a href="mailto:support@bukee.mail" className="footer-contacts-list__link">
                          Email: support@bukee.mail
                        </a>
                      </li>
                      <ul className="footer-social">
                        <li className="footer-social__item">
                          <a href="/" className="footer-social__link">
                            <FacebookIcon/>
                          </a>
                        </li>
                        <li className="footer-social__item">
                          <a href="/" className="footer-social__link">
                            <TweeterIcon/>
                          </a>
                        </li>
                        <li className="footer-social__item">
                          <a href="/" className="footer-social__link">
                            <TwitchIcon/>
                          </a>
                        </li>
                        <li className="footer-social__item">
                          <a href="/" className="footer-social__link">
                            <YoutubeIcon/>
                          </a>
                        </li>
                        <li className="footer-social__item">
                          <a href="/" className="footer-social__link">
                            <SlackIcon/>
                          </a>
                        </li>
                        <li className="footer-social__item">
                          <a href="/" className="footer-social__link">
                            <ViberIcon/>
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;
