<template>
  <div class="layout">
    <header class="header">
      <h3>{{ $static.metadata.siteName }}</h3>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/contribute-data">Contribute Data</g-link>
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

@media screen and (max-width: 600px) {
  body {
    font-size: large;
  }
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

#post-content ul > li > p {
  margin-top: 0rem;
  margin-bottom: 0rem;
}

/* ===== Responsice table CSS ===== */
table {
  border-collapse: collapse;
  display: block;
  max-width: -moz-fit-content;
  max-width: fit-content;
  overflow-x: auto;
  white-space: nowrap;
}

table th {
  background-color: green;
  color: white;
}

td, th {
  border: 1px solid black;
  padding: 5px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #908d91 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 16px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #908d91;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
</style>
