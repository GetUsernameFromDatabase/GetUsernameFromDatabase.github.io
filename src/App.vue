<template>
  <div id="page-wraper">
    <About />
    <Proficiencies />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import About from './components/HomeAbout.vue';
import Contact from './components/HomeContact.vue';
import Proficiencies from './components/HomeProficiencies.vue';
import Projects from './components/HomeProjects.vue';

export default {
  name: 'Homepage',
  components: {
    About,
    Proficiencies,
    Projects,
    Contact,
  },
  data: function() {
return {colours: {scheme: {main: '#3ea399'}}};
}
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}

section {
	position: relative;
	min-height: 100vh;
	border-bottom: 3px solid rgba(6, 51, 59, 0.589);
	display: block;
  padding-bottom: 80px;
  box-sizing: border-box;
}
</style>
