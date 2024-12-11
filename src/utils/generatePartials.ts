export const createParticles = (parent: HTMLElement | null) => {
  const particles = [];
  const particlesCount = 100;

  if ( !parent ) return null;

  for ( let i = 0; i < particlesCount; i++ ) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    parent.appendChild(particle);
    particles.push(particle);
  }
  return particles;
};

