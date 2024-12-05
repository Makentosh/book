import React, { useCallback, useEffect } from 'react';
import gsap from 'gsap';
import { SuccessIcon } from '../../icons';

const createParticles = (parent: HTMLElement | null) => {
  const particles = [];

  if ( !parent ) return null;

  for ( let i = 0; i < 30; i++ ) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    parent.appendChild(particle);
    particles.push(particle);
  }
  return particles;
};

const SuccessModalContent = () => {
  const animateButton = useCallback(() => {
    const button: HTMLElement | null = document.querySelector('.success-modal');

    // Створення частинок
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
        // Анімація частинок
        particles?.forEach((particle) => {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 100;
          const randomColor = `hsl(${ Math.random() * 360 }, 100%, 70%)`;
          const targetColor = `hsl(${ Math.random() * 360 }, 100%, 70%)`;

          gsap.to(particle, {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            opacity: 1,
            backgroundColor: randomColor,
            duration: 0.7,
            scale: Math.random() * 0.5 + 0.5,
            ease: 'power3.out',
            onStart: () => {
              // Плавна зміна кольору
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
  )
}

export default SuccessModalContent;
