<template>
  <div class="flower">11</div>
  <div class="top">唐诗欣赏</div>
  <div class="menu">
    <router-link to="/hxos">回乡偶书</router-link>
    <router-link to="/cyxy">春夜喜雨</router-link>
    <router-link to="/dgql">登鹤雀楼</router-link>
  </div>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
body {
  margin: 0;
}
.flower {
  width: 400px;
  height: 289px;
  position: fixed;
  right: 0;
  background: url(../assets/flower.png) right top no-repeat;
}
.top {
  height: 120px;
  border-bottom: 1px solid gray;
  text-align: center;
  line-height: 120px;
  font-size: 30px;
  font-weight: bold;
  background: green;
  color: aliceblue;
}
.menu {
  width: 1000px;
  height: 100px;
  background-color: lightgray;
  margin: 5px auto;
}
.menu a {
  display: block;
  float: left;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: 10px;
  text-align: center;
  line-height: 30px;
  text-decoration: none;
  color: black;
}
.menu a:hover {
  background-color: goldenrod;
  border-radius: 2px;
}
.main {
  width: 1000px;
  min-height: 600px;
  border: 1px solid lightgray;
  margin: 10px auto;
  padding-top: 10px;
}
</style>
