<template>
  <div role="tablist">
  <h2 class="m-3">Frequently asked questions</h2>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="danger"> {{ question1 }} </b-button>
      </b-card-header>

      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text> {{ answer1 }} </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="danger">{{ question2 }}</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ answer2 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="danger">{{ question3 }}</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ answer3 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'FAQs',
      data() {
      return {
      title: 'Frequently Asked Questions for Car Safe Kids',
      question1: 'Will I be asked to paricipate?',
      question2: 'Should I bring anything?',
      question3: 'Will there be a place for kids to play?',
      answer1: 'A car seat clinic is an educational opportunity. We want you to get the most value for your time, so plan to participate in the check-up process.',
      answer2: 'Yes. Bring the owner manuals for the car seat and vehicle. Having diapers, snacks and toys handy may make waiting time more pleasant.',
      answer3: 'There will be a small play area for kids. However, we recommend bringing personal toys as well.',
        }
    },
    head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Click here to view frequently asked questions and their answers!' }
      ]
    }
  }
  }
  </script>
</script>

<style scoped>
</style>
