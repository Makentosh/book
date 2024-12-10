'use client';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import gsap from 'gsap';
import { useCallback, useEffect } from 'react';

export const AnimationProvider = ({ children }: { children: any }) => {

  const numberWithCommas = (x: number): string => {

    let formatter = new Intl.NumberFormat('en-US');

    return formatter.format(x);
  };

  const initHeaderAnimation = () => {
    const tl = gsap.timeline();
    tl.fromTo('.section-navbar__logo', { opacity: 0, y: -100 }, { opacity: 1, duration: 1, y: 0 })
        .fromTo('.header__bottom .offer-image', { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, 0.1)
        .fromTo('.header__bottom .offer__author', { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.2)
        .fromTo('.header__bottom .offer__title', { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.3)
        .fromTo('.header__bottom .offer__subtitle', { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, 0.4)
        .fromTo('.header__bottom .offer__text', { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, 0.5)
        .fromTo('.header__bottom .offer__btn, .header__bottom .offer__btn-subtext', {
          opacity: 0,
          y: 100
        }, { opacity: 1, y: 0 }, 1);

  };

  const initScrollAnimations = useCallback(() => {
    gsap.to('.section-offer-img', {
      scrollTrigger: {
        trigger: '.header',
        start: '15% top',
        scrub: true,
      },
      xPercent: -80,
      scale: 0.5,
      duration: 1.5,
      opacity: 0,
    });

    gsap.to('.header__bottom .offer', {
      scrollTrigger: {
        trigger: '.header',
        start: '15% top',
        scrub: true,
      },
      xPercent: 80,
      scale: 0.5,
      duration: 1.5,
      opacity: 0,
    });

    gsap.fromTo('.section-photo__image', {
      scrollTrigger: {
        trigger: '.section-author',
        start: 'top top',
      },
      opacity: 0,
      left: 999,
      duration: 1,
    }, {
      scrollTrigger: {
        trigger: '.section-author',
        start: '-50% top',
      },
      top: 50,
      left: -50,
      opacity: 1,
    });


    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-author',
        start: '-50% top',
      },
    });

    const items = gsap.utils.toArray('.statistic__number');

    tl2
        .from('.section-author .offer__author', {
          scale: 0,
          transformOrigin: 'left center'
        }, 0)
        .fromTo('.section-author .offer__title', { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.1)
        .fromTo('.section-author .offer__subtitle', { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, 0.4)
        .fromTo('.section-author .offer__text', { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, 0.5)
        .from('.section-author .offer__price', { scale: 0, transformOrigin: 'left center' }, 0.6)
        .from('.section-author .offer__btn-subtext', { scale: 0 }, 0.7);

    gsap.from(items, {
      scrollTrigger: {
        trigger: '.section-author',
        start: 'top top',
      },
      textContent: 0,
      duration: 1.5,
      snap: { textContent: 1 },
      ease: 'power1.in',
      stagger: {
        onUpdate: function () {
          // @ts-ignore
          let target = this.targets()[0];

          if ( target ) {
            target.innerHTML = numberWithCommas(Math.ceil(parseFloat(target.textContent || '0')));
          }

        },
      }

    });
  }, []);

  const initToTopButtonAnimation = () => {
    const toTopButton = document.querySelector('.to-top');

    if ( window.scrollY > 10 ) {
      gsap.fromTo(
          toTopButton,
          { top: 0, opacity: 0 },
          { top: '92%', opacity: 1, duration: 1, ease: 'power3.inOut' }
      );
    } else {
      gsap.set(toTopButton, { opacity: 0, top: 0 });
    }

    //show button
    gsap.to(toTopButton, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top+=10',
        toggleActions: 'play none none reverse',
      },
      top: '92%',
      opacity: 1,
      duration: 1,
      ease: 'power3.inOut'
    });

    // hide button if start page
    gsap.to(toTopButton, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'top+=10',
        toggleActions: 'reverse none none play',
      },
      top: 0,
      opacity: 0,
      duration: 1,
      ease: 'power3.inOut',
    });

  };

  const initBookContentAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-book-content',
        start: '-50% top',
      }
    });

    tl.fromTo('.section-book-content__title', { opacity: 0, x: -200 }, { opacity: 1, x: 0 }, 0.1)
        .fromTo('.section-book-content__subtitle', { opacity: 0, x: 200 }, { opacity: 1, x: 0 }, 0.2)
        .fromTo('.about__title', { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.3)
        .fromTo('.table__title', { opacity: 0, y: 200 }, { opacity: 1, y: 0 }, 0.3)
        .from('.about__text', { duration: 3.5, text: '' }, 0.4)
        .fromTo('.social', { opacity: 0, y: 100 }, { opacity: 1, y: 0, delay: 3 }, 0.5)
        .fromTo('.table-list__item', {
          opacity: 0,
          x: -100,
        }, {
          opacity: 1,
          stagger: 0.2,
          ease: 'power3.out',
          x: 0
        }, 0.6)
        .fromTo('.table__btn',
            {
              display: 'block',
              scale: 0,
              rotate: -180,
              opacity: 0
            },
            {
              scale: 1,
              rotate: 0,
              opacity: 1,
              duration: 1,
              delay: 2,
              ease: 'elastic.out(1, 0.5)',
            }, 0.7);
  };

  const initBooksAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-books',
        start: '-50% top',
      }
    });

    tl.from('.section-books__title', {
      scale: 0,
      opacity: 1,
      duration: 1
    });
    tl.from('.section-books__subtitle', {
      scale: 1.5,
      opacity: 0,
    });

    tl.from('.book', {
      autoAlpha: 0,
      x: -100,
      stagger: 0.2,
    });
  };

  const initEventsAnimations = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-events',
        start: '-50% top',
        // scrub: true,
        // pin: true,
      },
    });

    tl
        .from('.section-events-upcoming__author', {
          autoAlpha: 0,
          y: 50
        }, 0.1)
        .from('.section-events-upcoming__title', {
          autoAlpha: 0,
          y: 50
        })
        .from('.section-events-upcoming__subtitle', {
          autoAlpha: 0,
          y: 50
        }, 0.2)
        .from('.section-events-photo__inner img', {
          autoAlpha: 0,
          x: -100,
          y: 100
        }, 0.1)
        .from('.event', {
          autoAlpha: 0,
          y: 100
        }, 2)
        .from('.event-location__date', {
          x: -200,
          stagger: 0.5,
          autoAlpha: 0,
          duration: 1,
        }, 3);

  };

  const initBlogAnimations = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-blog',
        start: '-50% top',
      }
    });

    tl
        .from('.section-blog__title', {
          autoAlpha: 0,
          y: -50,
        })
        .from('.section-blog__subtitle', {
          autoAlpha: 0,
          y: -50,
        })
        .from('.post', {
          autoAlpha: 0,
          y: -100,
          stagger: 0.5,
        });
  };


  useEffect(() => {
    if ( typeof window !== 'undefined' ) {
      gsap.registerPlugin(ScrollTrigger, TextPlugin);
      initHeaderAnimation();
      initScrollAnimations();
      initToTopButtonAnimation();
      initBookContentAnimation();
      initBooksAnimation();
      initEventsAnimations();
      initBlogAnimations();
    }
  }, [initScrollAnimations]);

  return children;
};

export default AnimationProvider;
