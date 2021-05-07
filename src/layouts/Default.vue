<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
  font-size: larger;
  line-height: 1.6;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

a:link {
  color: blue;
}

a:visited {
  color: blue;
}

a:hover {
  color: blue;
}

a:active {
  color: blue;
}


.nav__link {
  margin-left: 20px;
}

.mb-0 {
  margin-bottom: 0px;
}

.mt-0 {
  margin-top: 0px;
}

.links {
  display: flex;
  justify-content: space-between;
}

.flex-between {
  display: flex;
  justify-content: space-between;
}
</style>
