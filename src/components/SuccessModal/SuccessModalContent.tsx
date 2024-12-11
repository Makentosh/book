import React, { useCallback, useEffect } from 'react';
import gsap from 'gsap';
import { SuccessIcon } from '../../icons';
import { createParticles } from '../../utils/generatePartials';


const SuccessModalContent = () => {
  const distanceLength = 200;
  const maximumHslColor = 360;

  const getRandomNumber = (value: number) => {
    if ( !value ) return 0;

    return Math.random() * value;
  };

  const animateButton = useCallback(() => {
    const button: HTMLElement | null = document.querySelector('.success-modal');

    const particles = createParticles(button);

    particles?.forEach((particle) => {
      gsap.set(particle, {
        x: 0,
        y: 0,
        opacity: 0,
      });
    });

    gsap.to(button, {
      onComplete: () => {
        particles?.forEach((particle) => {
          const angle = getRandomNumber(Math.PI * 2);
          const distance = getRandomNumber(distanceLength);
          const randomColor = `hsl(${ getRandomNumber(maximumHslColor) }, 100%, 70%)`;
          const targetColor = `hsl(${ getRandomNumber(maximumHslColor) }, 100%, 70%)`;

          gsap.to(particle, {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            opacity: 1,
            backgroundColor: randomColor,
            duration: 0.7,
            scale: getRandomNumber(0.5) + 0.5,
            ease: 'power3.out',
            onStart: () => {

              gsap.to(particle, {
                backgroundColor: targetColor,
                duration: 0,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
              });
            },
            onComplete: () => {
              gsap.to(particle, { opacity: 0, duration: 0.3 });
            },
          });
        });
      },
    });
  }, []);

  useEffect(() => {
    animateButton();
  }, [animateButton]);

  return (
      <div className={ 'success-modal' }>
        <div className="success-modal__icon">
          <SuccessIcon/>
        </div>
        <div className={ 'success-modal__description' }>
          Thank you for subscribing
        </div>
      </div>
  );
};

export default SuccessModalContent;
