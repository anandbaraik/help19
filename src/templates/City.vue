<template>
  <Layout>
    <h1>{{ $page.city.name }}</h1>

    <section class="pad" id="post-content">
      <div v-html="$page.city.content" />      
    </section>  
  </Layout>
</template>

<page-query>
query ($path: String!) {
  city(path: $path) {
    name
    content
    updatedOn
  }
}
</page-query>


<script>

export default {
  metaInfo() {
    const title = this.$page.city.name;

    const description = 'Details of ' + this.$page.city.name;

    return {
      title: title,
      meta: [
        {
          key: "description", 
          name: "description", 
          content: description
        },
      ]
    }
  },
}
</script>