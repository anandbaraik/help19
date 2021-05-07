<template>
  <Layout>

    <h1 class="mb-0">Help 19</h1>
    <p class="mt-0">Resources to help and fight Covid-19.</p>

    <section class="pad">
      <div class="item">
        <h3 class="mb-0">Cities</h3>
        <div v-for="edge in $page.cities.edges" :key="edge.node.id">
          <a v-bind:href="edge.node.path">{{ edge.node.name }}</a>
        </div>
      </div>

      <div class="item">
        <h3 class="mb-0">Online Consulation</h3>
        <ul>
          <li>
            <a href="https://www.tatahealth.com/online-Doctor-consultation/general-physician" target="_blank">Tata Online Health Consulation</a> <br>
            <small>Chat and video call available. Rs. 100/- for consulation.</small>
          </li>
          <li>
            <a href="https://www.practo.com/">Practo</a> <br>
            <small>Chat and video call available. Consulation fee may starts from Rs. 399/- First time users may also get some discount.</small>
          </li>
        </ul>
      </div>

      <div class="item">
        <h3 class="mb-0">Plasma Donors</h3>
        <g-link to="/plasma-donors">Websites List</g-link> <br>
      </div>

      <div style="margin-top: 6rem; margin-bottom: 1rem; text-align: center;">
        <small class="mb-0">Made with Gridsome, hosted on Netlify.</small> <br>
        <small class="mt-0 mb-0">Source code on <a href="https://github.com/insidert/insidert" target="_blank">GitHub</a>.</small>
      </div>

      <terms></terms>
    </section>

  </Layout>
</template>

<page-query>
query {
  cities: allCity(sortBy: "name", order: ASC) {
    edges {
      node {
        id
        name
        path
      }
    }
  }
}
</page-query>

<script>
import Terms from "../components/Terms.vue";

export default {
  metaInfo: {
    title: 'Help19'
  },
  
  components: {
    Terms
  }
}
</script>

<style scoped>
.item {
  padding: 2rem;
  background-color: lightcyan;
  margin-bottom: 1rem;
}
</style>
