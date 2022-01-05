<template>
  <ul id="menu">
    <li><a class="menu_link" id="nyregion" href="#">NY Region</a></li>
    <li><a class="menu_link" id="sports" href="#">Sport</a></li>
    <li><a class="menu_link" id="technology" href="#">Technologies</a></li>
    <li><a class="menu_link" id="politics" href="#">Politique</a></li>
  </ul>
  <div id="content">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
