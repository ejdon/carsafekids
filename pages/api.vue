<script>
export default {
	name: 'api',
	props: {
		article: Object,
		default: function () { return {} }
	}
}
</script>

<template>

    <article class="news-container">
      <h3> {{ article.subsection }} </h3>
      <img :src="article.thumbnail_standard">
      <a :href="article.url"> {{ article.title }} </a>
    </article>

</template>



<style lang="scss">

.news-container {
  margin: 1% 0%;
  background-color: #f2e6df;
}
</style>
