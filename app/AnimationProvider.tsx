'use client';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useEffect } from 'react';

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

  const initScrollAnimations = () => {
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
        .from('.section-author .offer__btn-subtext', { scale: 0 }, 0.7)
        .from(items, {
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
  };

  const initToTopButtonAnimation = () => {
    gsap.fromTo('.to-top', {
          scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: true,
          },
          top: 0,
          opacity: 0,
          duration: 1,
        },
        {
          scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: true,
          },
          opacity: 1,
          top: '92%'
        });
  };


  useEffect(() => {
    if ( typeof window !== 'undefined' ) {
      gsap.registerPlugin(ScrollTrigger);
      initHeaderAnimation();
      initScrollAnimations();
      // initStatisticsAnimation();
      initToTopButtonAnimation();
    }
  }, []);

  return children;
};

export default AnimationProvider;
