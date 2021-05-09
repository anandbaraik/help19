<template>
  <Layout>

    <h1 class="mb-0">Help 19</h1>
    <p class="mt-0">Resources to help and fight Covid-19.</p>

    <section>
      <div class="item">
        <h3 class="mb-0">Cities</h3>
        <div v-for="edge in $page.cities.edges" :key="edge.node.id">
          <a v-bind:href="edge.node.path">{{ edge.node.name }}</a>
        </div>
      </div>

      <div class="item">
        <h3 class="mb-0">Vaccination</h3>
        <p>Go to <a href="https://selfregistration.cowin.gov.in/" target="_blank">Co-Win website</a> and register with your Phone number or Aarogya Setu app or Umang app.</p>
        <p>Check slot availability without signing into Co-Win webiste in <a href="https://www.vaccinateme.in/covid/?type=district">vaccinateme.in</a></p>
      </div>

      <div class="item">
        <h3 class="mb-0">Online Doctor Consulation</h3>
        <ul>
          <li>
            <a href="https://www.practo.com/">Practo</a> <br>
          </li>
          <li>
            <a href="https://www.tatahealth.com/online-Doctor-consultation/general-physician" target="_blank">Tata Online Health Consulation</a> <br>
          </li>
        </ul>
      </div>

      <div class="item">
        <h3 class="mb-0">Plasma Donors</h3>
        <g-link to="/plasma-donors">Websites List</g-link> <br>
      </div>

      <div class="item">
        <h3 class="mb-0">Twitter Feeds</h3>
        <a href="https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/1?id=DASHBOARD_601b9e214c7a6b689d76f493&home=1" target="_blank">Sprinklr.com</a>
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
  metaInfo() {
    return {
      title: 'Home',
      meta: [
        {
          key: "description", 
          name: "description", 
          content: 'Curated list of resources to help and fight Covid19.'
        },
      ]
    }
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
