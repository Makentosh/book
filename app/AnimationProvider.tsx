'use client';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useCallback, useEffect } from 'react';

export const AnimationProvider = ({ children }: { children: any }) => {

  const initStatisticsAnimation = useCallback(() => {
    const items = document.querySelectorAll('.statistic__number');
    gsap.from(items, {
      scrollTrigger: {
        trigger: '.section-author',
        start: 'top top',
      },
      textContent: 0,
      duration: 1.5,
      snap: { textContent: 1 },
      ease: "power1.in",
      stagger: {
        onUpdate: function () {
          this.targets()[0].innerHTML = `${numberWithCommas(Math.ceil(this.targets()[0].textContent))}+`;
        },
      }

    });
  }, []);

  useEffect(() => {
    if ( typeof window !== 'undefined' ) {
      gsap.registerPlugin(ScrollTrigger);
      initHeaderAnimation();
      initScrollAnimations();
      initStatisticsAnimation();
    }
  }, [initStatisticsAnimation]);

  const numberWithCommas = (x: number): string => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const initHeaderAnimation = () => {
    const tl = gsap.timeline();
    tl.fromTo('.section-navbar__logo', { opacity: 0, y: -100 }, { opacity: 1, duration: 1, y: 0 })
        .fromTo('.offer-image', { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, 0.1)
        .fromTo('.offer__author', { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.2)
        .fromTo('.offer__title', { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, 0.3)
        .fromTo('.offer__subtitle', { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, 0.4)
        .fromTo('.offer__text', { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, 0.5)
        .fromTo('.offer__btn, .offer__btn-subtext', { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, 1);

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
      opacity: 0,
    });
  };


  return children;
};

export default AnimationProvider;
