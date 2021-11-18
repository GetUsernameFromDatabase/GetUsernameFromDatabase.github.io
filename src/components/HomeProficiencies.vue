<template>
  <section>
    <h2 class="mb-5">
      What I’m good at?
    </h2>
    <div class="proficiencies row">
      <Proficiency
        v-for="proficiency in proficiencies"
        :key="proficiency.title"
        :title="proficiency.title"
        :content="proficiency.content"
      />
      <div />
    </div>
  </section>
</template>

<script>
import Proficiency from './ItemProficiency.vue';

export default {
  name: 'HomeProficiencies',
  components: {
    Proficiency,
  },
  data: function () {
    return {
      proficiencies: [
        {
          title: 'Programming Languages',
          content: [
            'Written more than 500 lines in Python, C# and JavaScript',
            `Barely touched C++, used only for simple school assignements.
      Same goes to assembler language.`,
          ],
        },
        {
          title: 'HTML5 & CSS3',
          content: [
            'I am able to combine HTM5 and CSS3 to make static websites fairly easily.',
            `Haven't used the likes of React.js to make websites on the fly yet. 
      From what I've see - not much different from editing txt files with code.`,
          ],
        },
        {
          title: 'Frameworks',
          content: ['Vue.js', 'Laravel'],
        },
        {
          title: 'Technical abilities',
          content: [
            `I am able to take apart and assemble a PC.
      I'd prefer not to do it daily considering the fact that it took
      me more than an hour just to swap cases.`,
            `I've also learned how to do basic soldering to fix broken headphones
      meaning I'm willing to learn new skills when need be.`,
          ],
        },
      ],
    };
  },
};
</script>

<style>
.proficiencies {
	margin:0px;
  padding:0px;
}
</style>
