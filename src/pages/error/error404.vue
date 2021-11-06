// https://github.com/tsparticles/404-templates/tree/main/space
<template>
  <div>
    <Particles
      id="tsparticles"
      :options="{
        fpsLimit: 60,
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 1,
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: {
              enable: true,
              minimumValue: 1,
            },
          },
          move: {
            enable: true,
            speed: 0.17,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'out',
            },
          },
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            resize: false,
          },
        },
        detectRetina: true,
      }"
    />
    <div class="denied__wrapper">
      <h1>404</h1>
      <h3>
        LOST IN <span>SPACE</span> App-Name? Hmm, looks like that page doesn't
        exist.
      </h3>
      <img id="astronaut" src="./astronaut.svg" />
      <img id="planet" src="./planet.svg" />
      <a href="/"><button class="denied__link">Go Home</button></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  beforeCreate: () => {
    document.body.className = 'permission_denied';
  },
};
</script>

<style src="./404.css"></style>
