<template>
  <div id="page-wraper">
    <b-navbar
      id="navbar"
      v-b-scrollspy:content
      variant="primary"
      type="dark"
      fixed="top"
      toggleable="sm"
    >
      <b-navbar-brand>Ryan Kruberg</b-navbar-brand>
      <b-navbar-toggle target="nav-text-collapse" />

      <b-collapse
        id="nav-text-collapse"
        is-nav
      >
        <b-navbar-nav
          class="ml-auto"
          :fill="true"
          :justified="true"
        >
          <b-nav-item
            v-for="section in sections"
            :key="section.name"
            :href="section.name | replace('Home', '#')"
            @click="scrollIntoView"
          >
            {{ section.name | replace('Home') }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div
      id="content"
      ref="content"
    >
      <Sections
        :is="section"
        v-for="section in sections"
        :id="section.name | replace('Home')"
        :key="section.name"
      />
    </div>
  </div>
</template>

<script>
import About from '../components/HomeAbout.vue';
import Contacts from '../components/HomeContact.vue';
import Proficiencies from '../components/HomeProficiencies.vue';
import Projects from '../components/HomeProjects.vue';

export default {
  name: 'Homepage',
  components: {
    About,
    Proficiencies,
    Projects,
    Contacts,
  },

  filters: {
    replace: function (string, toReplace, replaceValue = '') {
      // Removes till first capital letter not at index [0]
      return string.replace(toReplace, replaceValue);
    },
  },
  data: function () {
    return {
      sections: [About, Proficiencies, Projects, Contacts],
      activeNavHref: '#HomeAbout',
      navHeight: 50 + 'px',
    };
  },
  methods: {
    /** Scrolls smoothly to the link 
     * @param {MouseEvent} event  */
    scrollIntoView(event) {
      event.preventDefault();
      /** @type {HTMLButtonElement} */
      const button = event.target;
      const href = button.getAttribute('href');
      const el = href ? document.querySelector(href) : null;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
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
  padding: 0px;
  padding-top: 56px;
}

#content {
  position: relative;
  max-height: calc(100vh - 56px);
  overflow-y: scroll;
}

section {
  position: relative;
  min-height: calc(100vh - 56px);
  border-bottom: 3px solid rgba(6, 51, 59, 0.589);
  display: block;
  padding-bottom: 80px;
  box-sizing: border-box;
  padding: 20px;
}


</style>
