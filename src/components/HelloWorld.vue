<template>
  <div class="flex justify-center mt-12">
    <h1 class="font-bold text-4xl uppercase">{{ msg }}</h1>
  </div>
  <div class="flex justify-center mt-12 w-2/6 mx-auto divide-x">
    <span class="text-center uppercase px-4 menu_link" id="nyregion">NY Region</span>
    <span class="text-center uppercase px-4 menu_link" id="sports">sports</span>
    <span class="text-center uppercase px-4 menu_link" id="technology">Technologies</span>
    <span class="text-center uppercase px-4 menu_link" id="politics">Politique</span>
  </div>
  <div id="content" class="grid grid-cols-3 w-5/6 mx-auto mt-12 gap-6">
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
