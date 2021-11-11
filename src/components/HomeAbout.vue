<template>
  <section class="d-flex align-items-center flex-column justify-content-center">
    <div id="main-description">
      <h3>WELCOME TO MY PAGE</h3>
      <div id="job-title-container">
        <h2>I'M A JUNIOR DEVELOPER</h2>
      </div>
      <div id="skills-container">
        WEB DEVELOPMENT | C#, JS, TS, Python
      </div>
      <h1>Ryan Kruberg</h1>
    </div>
    <div class="mt-5" />
    <div id="additional-description">
      <b-button
        v-b-toggle.additional-description-collapse
        @click="collapseButtonClick"
      >
        {{ collapseButtonTexts[0] }}
      </b-button>
      <b-collapse id="additional-description-collapse">
        <p>
          Affinity towards computer since childhood. I love programming since it
          allows me to automate tasks which are too tedious to do by hand or far
          too complex.
        </p>
        <p>
          I believe that in the modern age there is nothing that you can't learn
          - if the answer isn't out there then there is enough information out
          there help find a conclusion. Emphasis should be more on refining way
          of thought rather than directly on knowledge - the better a person is
          at learning then more knowledge they can amass.
        </p>
      </b-collapse>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeAbout',
  data: function () {
    return { collapseButtonTexts: ['More About Me', 'Less About Me'] };
  },
  methods: {
    /** @param {MouseEvent} event */
    collapseButtonClick(event) {
      const texts = this.collapseButtonTexts;
      /** @type {HTMLButtonElement} */
      const button = event.target;

      const collapsed = button.classList.contains('collapsed');
      button.innerText = texts[collapsed ? 1 : 0]; // Class is changed after the click event
    },
  },
};
</script>

<style>
#main-description > h3 {
  font-size: 1em;
  color: grey;
}

#main-description > h1 {
  font-size: 1.5em;
  color: darkcyan;
  font-family: 'Georgia', 'Times New Roman';
  font-style: italic;
}

#job-title-container {
  border-top: 3px solid #1595de;
  border-bottom: 3px solid #2faa64;
}

#job-title-container > h2 {
  font-size: 2.2em;
}

#skills-container {
  color: cadetblue;
}
</style>
