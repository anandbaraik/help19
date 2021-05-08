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

      <div class="text-center">
        <g-link class="nav__link" to="/about/">About this website</g-link>
      </div>
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
export default {
  metaInfo: {
    title: 'Home',
    description: 'Curated list of resources to help and fight Covid19.'
  },
}
</script>

<style scoped>
.item {
  padding: 2rem;
  background-color: lightcyan;
  margin-bottom: 1rem;
}
</style>
